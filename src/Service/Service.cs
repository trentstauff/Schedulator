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

        public async Task<List<Event>> GetEvents(string userId)
        {
            return await _repository.GetEvents(userId);
        }

        public async Task CreateEvent(Event newEvent)
        {
            // todo: call a helper function to get a list of generated events
            // loop over each generated event and send them to the database
            await _repository.CreateEvent(newEvent);
        }

        public async Task UpdateEvent(Event newEvent)
        {
            // todo: call a helper function to get a list of generated events
            // loop over each generated event and send them to the database
            await _repository.UpdateEvent(newEvent);
        }
    }
}