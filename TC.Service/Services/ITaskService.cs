using TC.Service.Resources;

namespace TC.Service;

public interface ITaskService
{
    Task<TaskResponse> GetTaskByIdAsync(int key);
    Task<IEnumerable<TaskResponse>> GetTasksAsync(int page, int perPege);
    Task<bool> CreateTaskAsync(TaskRequest request);
    Task<bool> UpdateTaskAsync(TaskRequest request);
}
