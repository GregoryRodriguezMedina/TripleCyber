
namespace TC.Service.Resources;

public record NoteRequest
{
    public int TaskId { get; set; }

    public string Note { get; set; }

    public long Created { get; set; }
}
