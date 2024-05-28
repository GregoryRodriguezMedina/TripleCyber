#nullable disable

namespace TC.Domain;

public partial class TaskEntity
{
    public int Id { get; set; }

    public string Task { get; set; }

    public short Priority { get; set; }

    public string Solution { get; set; }

    public long Created { get; set; }

    public long? Solved { get; set; }

    public virtual ICollection<NoteEntity> Notes { get; set; } = new List<NoteEntity>();
}