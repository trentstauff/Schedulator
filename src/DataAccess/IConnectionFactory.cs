using System;
using System.Data;

namespace DataAccess
{
    public interface IConnectionFactory
    {
        IDbConnection CreateSchedulatorDbConnection();
    }
}