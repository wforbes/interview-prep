# Design LRU Cache

# Lease Recently Used cache
# KV { x: 1, y: 1 }


# Capacity is important, ask about it
# If cache reached the limit, we have to make a decision to remove the value thats least recently used
"""
      PUT, GET - we are adding and retrieving values
  { X:1, Y:2, A:0, B:3, C:4 } - capacity is 5
  Recent Operations:
  GET (X) = 1
  GET (X) = 2
  GET (Y)
  GET (Y)
  GET (A)
  GET (B)
  PUT (D, 0.1)
- We're at our capacity, so we need to evict an old item to make room for D
- how do we determine how to evict the C value?
- the idea is to give priority to the most recently used item
- Goal is: { X:1, Y:2, A:0, B:3, D: 0.1 }

  Hashmap or dictionary has no order,
  We can use a Linked List to preserve order of priority
  Doubly linked list:

  HEAD <=> MRU <=> LRU <=> TAIL

  We can use hashmap for look ups

"""


# doubly linked list node
class DLNode:
    def __init__(self, key, val, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next

    # 1. we want to store hashmap to store key and the DLNode that it points to
    # 2. when we call the put method we want to keep the DLNode at the head of the linked list
    # Edge case: when we call the get method we want to move the node to the head to maintain the recency
    #     if the key already exists ... like { X: 1 } is in the cache, and we call PUT (X, 2)
    #         we need to add the value to the node ...
    #             { X: DLNode(X, 1)} becomes { X: DLNode(X, 2)}
    #             then we need to move this node to the head
    #         so { X: DLNode(X, 2)} is in the list
    #             List is... HEAD <=> DLNode(Y, 2) <=> DLNode(X, 1) <=> TAIL
    #             List will become... HEAD <=> DLNode(X, 1) <=> DLNode(Y, 2) <=> TAIL


class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity  # define capacity upfront
        self.cache = dict()  # hashmap for lookups
        # Doubly Linked List
        self.head = DLNode(
            -1, -1
        )  # (ask the range/type of value to be stored .. negatives, floats)
        self.tail = DLNode(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def put(self, key, val):
        # 1. insert a key K, V
        # 2. updating an existing K
        # 3. take care of eviction when the capacity is reached
        node = DLNode(key, val)  # X,1 => DLNode(X, 1, prev=None, next=Node)
        if key in self.cache:
            # 2
            # to delete the node from DLL
            self._delete(self.cache[key])
        else:
            if len(self.cache) == self.capacity:
                # we have to delete the least recently used key
                # this is the node prev to the tail
                lru_node = self.tail.prev
                del self.cache[lru_node.key]  # remove from the cache
                # _delete is a helper method for removing nodes from the list
                self._delete(lru_node)
        self.cache[key] = node  # insert into cache hashmap
        # add node to list
        self._add(node)
        pass

    def _add(self, node):
        node.prev = self.head
        node.next = self.head.next
        self.head.next = node
        self.head.next.prev = node

    def _delete(self, node):
        next_node = node.next
        prev_node = node.prev
        next_node.prev = prev_node
        prev_node.next = next_node

    def get(self, key):
        # confirm with interviewer what we want to return if not available
        if key not in self.cache:
            return -1

        node = self.cache[key]
        # to move the node to the most recent spot
        # delete it and readd it
        self._delete(node)
        self._add(node)


# Follow up question possibility:
# LFU ? - Least Frequently Used cache
