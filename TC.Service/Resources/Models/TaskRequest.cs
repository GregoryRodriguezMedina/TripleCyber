
using TC.Domain.Enums;

namespace TC.Service.Resources;

public record TaskRequest
{
    public string Task { get; set; }

    public int Priority { get; set; } //PriorityType
}
