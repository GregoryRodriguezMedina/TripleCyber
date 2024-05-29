using AutoMapper;
using TC.Data.Repository;
using TC.Domain;
using TC.Service.Resources;

namespace TC.Service;

internal class NoteService : INoteService
{
    private readonly INoteRepository repository;
    private readonly IMapper mapper;
    public NoteService(IMapper mapper, INoteRepository repository)
    {
        this.mapper = mapper;
        this.repository = repository;
    }

    public virtual async Task<NoteResponse> GetNoteByIdAsync(int key)
    {
        var query = await this.repository.GetByIdAsync(key);
        return mapper.Map<NoteResponse>(query);
    }

    public async virtual Task<IEnumerable<NoteResponse>> GetNotesAsync(int page, int perPege, int taskId)
    {
        var query = await this.repository.GetAsync(page, perPege, taskId); 

        return mapper.Map<IEnumerable<NoteResponse>>(query);
    }
    public virtual async Task<bool> CreateNoteAsync(NoteRequest request)
    {
        var entity = mapper.Map<NoteEntity>(request);

      return  await this.repository.InsertAsync(entity);
    }

    public virtual async Task<bool> UpdateNoteAsync(int key, NoteRequest request)
    {
        
        var entity = await this.repository.GetByIdAsync(key);

        if (entity == null) return false;

        mapper.Map(request, entity);

        return await this.repository.UpdateAsync(entity);
    }

    public virtual async Task<bool> DeleteNoteAsync(int key)
    {
        var entity = await this.repository.GetByIdAsync(key);

        if (entity == null) return false;

        return await this.repository.DeleteAsync(entity);
    }
}
