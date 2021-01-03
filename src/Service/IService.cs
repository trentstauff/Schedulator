using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace Service
{
    public interface IService
    {
        Task<List<Event>> GetEvents(string userId);
        Task CreateEvent(Event newEvent);
        Task UpdateEvent(Event newEvent);
    }
}