
namespace TC.Service.Resources;

public record TaskResponse : TaskRequest
{
    public int Id { get; set; }
    public string Solution { get; set; }

    public long Created { get; set; }

    public long? Solved { get; set; }
}
