using System;

namespace Models
{
    public class Event
    {
        public long EventId { get; set; }
        public string UserId { get; set; }
        public DateTimeOffset StartDatetime { get; set; }
        public DateTimeOffset EndDatetime { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTimeOffset Reminder { get; set; }
        public byte Priority { get; set; }
        public DateTime TimeRequired { get; set; }
        public byte Difficulty { get; set; }
        public DateTimeOffset CreationDatetime { get; set; }
        public DateTimeOffset ModificationDatetime { get; set; }
    }
}