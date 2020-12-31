using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using DataAccess;
using Models;

namespace Service
{
    public class Service : IService
    {
        private readonly IRepository _repository;

        public Service(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<Event>> GetEvents(string userId, DateTimeOffset date)
        {
            return await _repository.GetEvents(userId);
        }

        public async Task CreateEvent(Event newEvent)
        {
            await _repository.CreateEvent(newEvent);
        }

        public async Task UpdateEvent(Event newEvent)
        {
            await _repository.UpdateEvent(newEvent);
        }
    }
}