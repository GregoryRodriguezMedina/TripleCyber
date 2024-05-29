using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using TC.Data;

namespace TC.Service;

public static class Boostrap
{
    public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
    {
        var conn = configuration.GetConnectionString("DefaultConnection");

        services.AddDbContext<TaskContext>(options =>
        //options.useInMemoryDatabase("VirtualDB")
          options.UseSqlServer(conn//,
                                   //providerOptions => providerOptions.EnableRetryOnFailure()
          ));

        services.AddTransient<INoteService, NoteService>();
        services.AddTransient<ITaskService, TaskService>();

        services.AddRepositories();

        return services;
    }
}
