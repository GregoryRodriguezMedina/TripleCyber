
namespace TC.Service.Resources;

public record TaskResponse : TaskRequest
{
    public int Id { get; set; }
}
