using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TC.Domain;

#nullable disable

namespace TC.Data.Configurations
{
    public partial class NoteConfiguration : IEntityTypeConfiguration<NoteEntity>
    {
        public void Configure(EntityTypeBuilder<NoteEntity> entity)
        {
            entity.HasKey(e => e.Id).HasName("PKNote");

            entity.ToTable("Notes", "Task");

            entity.ToTable("Notes", "Task");

            entity.Property(e => e.Note)
            .HasMaxLength(200)
            .IsUnicode(false)
            .HasColumnName("Note");

            entity.HasOne(d => d.Task).WithMany(p => p.Notes)
            .HasForeignKey(d => d.TaskId)
            .OnDelete(DeleteBehavior.ClientSetNull)
            .HasConstraintName("FKNoteToTask");

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<NoteEntity> entity);
    }
}
