using Microsoft.Extensions.DependencyInjection;
using TC.Data.Repository;

namespace TC.Data;

public static class Boostrap
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<INoteRepository, NoteRepository>();
        services.AddScoped<ITaskRepository, TaskRepository>();

        return services;
    }
}
