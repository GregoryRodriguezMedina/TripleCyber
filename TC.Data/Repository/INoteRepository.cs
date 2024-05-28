using TC.Domain;

namespace TC.Data.Repository;

public interface INoteRepository
{
    Task<NoteEntity> GetByIdAsync(int key);
    Task<IEnumerable<NoteEntity>> GetAsync(int page, int perPege);
    Task<bool> InsertAsync(NoteEntity entity, bool autoSave = true);
    Task<bool> UpdateAsync(NoteEntity entity, bool autoSave = true);
}
