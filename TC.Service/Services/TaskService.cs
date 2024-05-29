using AutoMapper;
using TC.Data.Repository;
using TC.Domain;
using TC.Service.Resources;

namespace TC.Service;

internal class TaskService : ITaskService
{
    private readonly ITaskRepository repository;
    private readonly IMapper mapper;
    public TaskService(IMapper mapper, ITaskRepository repository)
    {
        this.mapper = mapper;
        this.repository = repository;
    }

    public virtual async Task<TaskResponse> GetTaskByIdAsync(int key)
    {
        var query = await this.repository.GetByIdAsync(key);
        return mapper.Map<TaskResponse>(query);
    }

    public async virtual Task<IEnumerable<TaskResponse>> GetTasksAsync(int page, int perPege)
    {
        var query = await this.repository.GetAsync(page, perPege); 

        return mapper.Map<IEnumerable<TaskResponse>>(query);
    }
    public virtual async Task<bool> CreateTaskAsync(TaskRequest request)
    {
        var entity = mapper.Map<TaskEntity>(request);

      return  await this.repository.InsertAsync(entity);
    }

    public virtual async Task<bool> UpdateTaskAsync(TaskRequest request)
    {
        var entity = mapper.Map<TaskEntity>(request);

        return await this.repository.UpdateAsync(entity);
    }


}
