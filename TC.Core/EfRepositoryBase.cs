using Microsoft.EntityFrameworkCore;

namespace TC.Core
{
    public class EfRepositoryBase<TKey, TEntity>
    {
        private readonly DbContext context;
        //internal DbSet<TEntity> entity;

        //public virtual DbSet<TEntity> Entity
        //{
        //    get
        //    {
        //        return entity ??= context.SetCreate<TKey, TEntity>();
        //    }
        //}

        public EfRepositoryBase(DbContext context)
        {
            this.context = context;
        }

        //public virtual TEntity GetById(TKey key)
        //{
        //    return this.Entity.Find(key);
        //}
    }
}
