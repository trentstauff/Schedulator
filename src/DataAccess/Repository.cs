using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Models;


namespace DataAccess
{
    public class Repository : IRepository
    {
        private readonly IConnectionFactory _connectionFactory;

        public Repository(IConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<List<Event>> GetEvents(string userId)
        {
            var sql = @"SELECT [EventId]
                              ,[UserId]
                              ,[StartDatetime]
                              ,[EndDatetime]
                              ,[Title]
                              ,[Description]
                              ,[Reminder]
                              ,[Priority]
                              ,[TimeRequired]
                              ,[Difficulty]
                              ,[CreationDatetime]
                              ,[ModificationDatetime]
                       FROM [schedulator].[dbo].[Events]
                       WHERE UserId = @UserId";

            var parameters = new DynamicParameters();
            parameters.Add("@UserId", userId);

            var results = await _connectionFactory.CreateSchedulatorDbConnection().QueryAsync<Event>(sql, parameters);

            return results.ToList();
        }

        public async Task CreateEvent(Event newEvent)
        {
            var sql = @"INSERT INTO [schedulator].[dbo].[Events]
                                   ([UserId]
                                   ,[StartDatetime]
                                   ,[EndDatetime]
                                   ,[Title]
                                   ,[Description]
                                   ,[Reminder]
                                   ,[Priority]
                                   ,[TimeRequired]
                                   ,[Difficulty]
                                   ,[CreationDatetime]
                                   ,[ModificationDatetime])
                             VALUES
                                   (@UserId
                                   ,@StartDatetime
                                   ,@EndDatetime
                                   ,@Title
                                   ,@Description
                                   ,@Reminder
                                   ,@Priority
                                   ,@TimeRequired
                                   ,@Difficulty
                                   ,@CreationDatetime
                                   ,@ModificationDatetime)";

            var parameters = new DynamicParameters();
            parameters.Add("@UserId", newEvent.UserId);
            parameters.Add("@StartDatetime", newEvent.StartDatetime);
            parameters.Add("@EndDatetime", newEvent.EndDatetime);
            parameters.Add("@Title", newEvent.Title);
            parameters.Add("@Description", newEvent.Description);
            parameters.Add("@Reminder", newEvent.Reminder);
            parameters.Add("@Priority", newEvent.Priority);
            parameters.Add("@TimeRequired", newEvent.TimeRequired);
            parameters.Add("@Difficulty", newEvent.Difficulty);
            parameters.Add("@CreationDatetime", newEvent.CreationDatetime);
            parameters.Add("@ModificationDatetime", newEvent.ModificationDatetime);

            await _connectionFactory.CreateSchedulatorDbConnection().ExecuteAsync(sql, parameters);
        }

        public async Task UpdateEvent(Event newEvent)
        {
            var sql = @"UPDATE [schedulator].[dbo].[Events]
                           SET [UserId] = @UserId
                              ,[StartDatetime] = @StartDatetime
                              ,[EndDatetime] = @EndDatetime
                              ,[Title] = @Title
                              ,[Description] = @Description
                              ,[Reminder] = @Reminder
                              ,[Priority] = @Priority
                              ,[TimeRequired] = @TimeRequired
                              ,[Difficulty] = @Difficulty
                              ,[CreationDatetime] = @CreationDatetime
                              ,[ModificationDatetime] = @ModificationDatetime
                         WHERE EventId = @EventId";

            var parameters = new DynamicParameters();
            parameters.Add("@EventId", newEvent.EventId);
            parameters.Add("@UserId", newEvent.UserId);
            parameters.Add("@StartDatetime", newEvent.StartDatetime);
            parameters.Add("@EndDatetime", newEvent.EndDatetime);
            parameters.Add("@Title", newEvent.Title);
            parameters.Add("@Description", newEvent.Description);
            parameters.Add("@Reminder", newEvent.Reminder);
            parameters.Add("@Priority", newEvent.Priority);
            parameters.Add("@TimeRequired", newEvent.TimeRequired);
            parameters.Add("@Difficulty", newEvent.Difficulty);
            parameters.Add("@CreationDatetime", newEvent.CreationDatetime);
            parameters.Add("@ModificationDatetime", newEvent.ModificationDatetime);

            await _connectionFactory.CreateSchedulatorDbConnection().ExecuteAsync(sql, parameters);
        }
    }
}
