using Microsoft.EntityFrameworkCore;
using TC.Domain;

namespace TC.Data.Repository;

internal class NoteRepository(TaskContext taskContext) : INoteRepository
{
    public virtual async Task<NoteEntity> GetByIdAsync(int key)
    {
        return await taskContext.Notes.FindAsync(key) ?? new NoteEntity();
    }

    public async virtual Task<IEnumerable<NoteEntity>> GetAsync(int page, int perPege, int taskId)
    {
        return await taskContext.Notes.Where(a=> a.TaskId == taskId).ToArrayAsync();
    }
    public virtual async Task<bool> InsertAsync(NoteEntity entity, bool autoSave = true)
    {
        await taskContext.Notes.AddAsync(entity);

        if (!autoSave)
            return true;

        return await taskContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> UpdateAsync(NoteEntity entity, bool autoSave = true)
    {
        taskContext.Notes.Update(entity);

        if (!autoSave)
            return true;

        return await taskContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> DeleteAsync(NoteEntity entity, bool autoSave = true)
    {
        taskContext.Notes.Remove(entity);

        if (!autoSave)
            return true;

        return await taskContext.SaveChangesAsync() > 0;
    }
}
