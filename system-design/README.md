# System Design Study Notes

## Organization

- **concepts/** - Fundamental concepts and building blocks
- **patterns/** - Common architectural patterns
- **case-studies/** - Practice with real-world system designs

## Suggested Study Topics

### Concepts
- Scalability (horizontal vs vertical)
- Load balancing
- Caching strategies
- Database design (SQL vs NoSQL)
- Sharding and partitioning
- Replication
- CAP theorem
- Consistency patterns
- API design (REST, GraphQL, gRPC)
- Message queues
- Microservices vs Monolith
- CDN (Content Delivery Networks)
- Rate limiting
- Monitoring and logging
- Security basics

### Patterns
- Microservices architecture
- Event-driven architecture
- CQRS (Command Query Responsibility Segregation)
- API Gateway pattern
- Circuit breaker pattern
- Saga pattern
- Publisher-Subscriber pattern
- Request-Response pattern

### Common Case Studies
- Design Twitter/X
- Design Instagram
- Design URL Shortener (bit.ly)
- Design YouTube
- Design Uber/Lyft
- Design Netflix
- Design Messenger/WhatsApp
- Design Google Drive/Dropbox
- Design Rate Limiter
- Design Web Crawler
- Design Notification System
- Design Search Autocomplete
- Design News Feed

## Resources

- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [ByteByteGo](https://bytebytego.com/)
- [Gaurav Sen YouTube](https://www.youtube.com/c/GauravSensei)
- [System Design Interview Books by Alex Xu](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF)

## Interview Framework

When tackling a system design question:

1. **Clarify Requirements** (5 min)
   - Functional requirements
   - Non-functional requirements (scale, performance, availability)
   - Constraints

2. **Estimation** (5 min)
   - Traffic estimates
   - Storage estimates
   - Bandwidth estimates

3. **High-Level Design** (10-15 min)
   - Draw main components
   - Show data flow
   - Identify APIs

4. **Deep Dive** (15-20 min)
   - Database schema
   - Scaling strategies
   - Bottlenecks and solutions
   - Trade-offs

5. **Wrap Up** (5 min)
   - Summary
   - Monitoring
   - Future improvements
