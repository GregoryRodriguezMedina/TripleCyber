
namespace TC.Service.Resources;

public record NoteResponse : NoteRequest
{
    public int Id { get; set; }
}