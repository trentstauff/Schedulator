using System.Data;
using System.Data.SqlClient;

namespace DataAccess
{
    public class ConnectionFactory : IConnectionFactory
    {
        public IDbConnection CreateSchedulatorDbConnection()
        {
            var connectionBuilder = new SqlConnectionStringBuilder{UserID = "sa", Password = "Password123!", DataSource = "localhost"};
            return new SqlConnection(connectionBuilder.ConnectionString);
        }
    }
}
