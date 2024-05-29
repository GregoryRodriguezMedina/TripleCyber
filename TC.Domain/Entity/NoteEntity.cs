#nullable disable

namespace TC.Domain;

public partial class NoteEntity
{
    public int Id { get; set; }

    public int TaskId { get; set; }

    public string Note { get; set; }

    public long Created { get; set; }
    public virtual TaskEntity Task { get; set; } = null!;
}