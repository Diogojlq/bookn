## 📅 Slot Structure (Schedules)

Slots represent the time windows available for bookings.

### Slot Attributes:
- **startTime**: ISO8601 String (e.g., `2026-01-25T09:00:00Z`)
- **endTime**: ISO8601 String (e.g., `2026-01-25T10:00:00Z`)
- **status**: `available` | `booked` | `blocked`
- **serviceId**: Reference to the service offered during that time slot.

### Business Rules:
1. A slot can only be reserved if its status is `available`.
2. Upon confirming a `booking`, the slot status must change to `booked`.
3. Past slots cannot be edited or modified.
