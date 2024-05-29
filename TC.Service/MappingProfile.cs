using AutoMapper;
using TC.Domain;
using TC.Service.Resources;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;


namespace TC.Service;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<TaskEntity, TaskResponse>();
        CreateMap<TaskRequest, TaskEntity>();

        CreateMap<NoteEntity, NoteResponse>();
        CreateMap<NoteRequest, NoteEntity>();
    }
}
