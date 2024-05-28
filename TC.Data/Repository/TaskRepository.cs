

using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using TC.Domain;

namespace TC.Data.Repository;

internal class TaskRepository(TaskContext taskContext) : ITaskRepository
{
    public virtual async Task<TaskEntity> GetByIdAsync(int key)
    {
        return await taskContext.Tasks.FindAsync(key) ?? new TaskEntity();
    }

    public async virtual Task<IEnumerable<TaskEntity>> GetAsync(int page, int perPege)
    {
        return await taskContext.Tasks.ToArrayAsync();
    }
    public virtual async Task<bool> InsertAsync(TaskEntity entity, bool autoSave = true)
    {
        await taskContext.Tasks.AddAsync(entity);

        if (!autoSave)
            return true;

        return await taskContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> UpdateAsync(TaskEntity entity, bool autoSave = true)
    {
        taskContext.Tasks.Update(entity);

        if (!autoSave)
            return true;

        return await taskContext.SaveChangesAsync() > 0;
    }
}
