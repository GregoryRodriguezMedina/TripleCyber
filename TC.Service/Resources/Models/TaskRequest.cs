
using TC.Domain.Enums;

namespace TC.Service.Resources;

public record TaskRequest
{
    public string Task { get; set; }

    public PriorityType Priority { get; set; }
}
