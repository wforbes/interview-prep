
class Solution(object):
    '''
    Vacuum Cleaner Route
    https://thedailybyte.dev/platform/code-editor?mailing=3
    from devlaunch DSA roadmap
    "This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

    Ex: Given the following strings...
    'LR', return true
    'URURD', return false
    'RUULLDRD', return true
    "
    '''
    def vacuum_returns_to_start(self, moves: str):
        opposites = {
            "L": "R",
            "R": "L",
            "U": "D",
            "D": "U"
        }
        to_cancel = {}

        # iterate through the moves string
        for i in range(0, len(moves)):
            # check to see if to_cancel has this move's opposite in the to_cancel map
            if opposites[moves[i]] in to_cancel:
                # decrement this to_cancel entry
                to_cancel[opposites[moves[i]]] -= 1
                # if this to_cancel entry is 0 or negative
                if to_cancel[opposites[moves[i]]] < 1:
                    # remove this move's opposite from the to_cancel map
                    del to_cancel[opposites[moves[i]]]
            # else
            else:
                # check to see if this move is in the to_cancel map
                if moves[i] in to_cancel:
                    # if so increment its value
                    to_cancel[moves[i]] += 1
                # else 
                else:
                    # add it to the to_cancel map with the value of 1
                    to_cancel[moves[i]] = 1
        
        return len(to_cancel) == 0