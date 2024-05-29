
namespace TC.Service.Resources;

public record TaskRequest
{
    public string Task { get; set; }

    public short Priority { get; set; }
}
