
namespace TC.Service.Resources;

public class TaskRequest
{
    public string Task { get; set; }

    public short Priority { get; set; }

    public string Solution { get; set; }

    public long Created { get; set; }

    public long? Solved { get; set; }
}
