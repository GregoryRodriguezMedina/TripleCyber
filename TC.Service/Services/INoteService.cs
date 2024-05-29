using TC.Service.Resources;

namespace TC.Service;

public interface INoteService
{
    Task<NoteResponse> GetNoteByIdAsync(int key);
    Task<IEnumerable<NoteResponse>> GetNotesAsync(int page, int perPege, int taskId);
    Task<bool> CreateNoteAsync(NoteRequest request);
    Task<bool> UpdateNoteAsync(int key, NoteRequest request);
    Task<bool> DeleteNoteAsync(int request);
}
