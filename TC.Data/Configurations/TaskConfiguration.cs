using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TC.Domain;


#nullable disable

namespace TC.Data.Configurations
{
    public partial class TaskConfiguration : IEntityTypeConfiguration<TaskEntity>
    {
        public void Configure(EntityTypeBuilder<TaskEntity> entity)
        {
            entity.HasKey(e => e.Id).HasName("PKTask");

            entity.ToTable("Tasks", "Task");

            entity.Property(e => e.Priority).HasDefaultValue((short)1);
            entity.Property(e => e.Solution)
            .HasMaxLength(500)
            .IsUnicode(false);
            entity.Property(e => e.Task)
            .HasMaxLength(250)
            .IsUnicode(false)
            .HasColumnName("Task");

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<TaskEntity> entity);
    }
}
