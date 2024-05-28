using TC.Domain;

namespace TC.Data.Repository;

public interface ITaskRepository
{
    Task<TaskEntity> GetByIdAsync(int key);
    Task<IEnumerable<TaskEntity>> GetAsync(int page, int perPege);
    Task<bool> InsertAsync(TaskEntity entity, bool autoSave = true);
    Task<bool> UpdateAsync(TaskEntity entity, bool autoSave = true);
}
