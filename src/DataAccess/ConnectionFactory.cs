using System;
using System.Data;
using System.Data.SqlClient;

namespace DataAccess
{
    public class ConnectionFactory : IConnectionFactory
    {
        public IDbConnection CreateSchedulatorDbConnection()
        {
            var connectionBuilder = new SqlConnectionStringBuilder{UserID = "sa", Password = Environment.GetEnvironmentVariable("sqlserverpassword"), DataSource = "13.92.138.113" };
            return new SqlConnection(connectionBuilder.ConnectionString);
        }
    }
}
