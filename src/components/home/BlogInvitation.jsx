import { motion } from 'framer-motion';

const posts = [
  {
    category: "Tax & Legal",
    icon: "ri-file-text-line",
    title: "¿Por Qué Es Crucial la Planificación Tributaria para Empresas en 2025?",
    excerpt: "Con el inicio del nuevo año, las empresas peruanas deben prepararse para afrontar los desafíos fiscales y tributarios que traerá…",
    link: "/blog/planificacion-tributaria-2025",
  },
  {
    category: "Outsourcing (BPO)",
    icon: "ri-shopping-bag-line",
    title: "Navidad Inteligente: Compras que Reducen tu Carga Tributaria",
    excerpt: "En Perú, con la llegada de la Navidad, hay algunas compras que puedes realizar para ayudar a deducir impuestos ante…",
    link: "/blog/navidad-inteligente",
  },
  {
    category: "Información General",
    icon: "ri-check-double-line",
    title: "Checklist Completo para un Cierre Fiscal Sin Estrés",
    excerpt: "El cierre fiscal es un proceso crucial para cualquier empresa, ya que permite obtener una visión clara de la situación…",
    link: "/blog/checklist-cierre-fiscal",
  },
];

const BlogInvitation = () => {
  return (
    <section className="py-24 px-6  text-slate-900 flex flex-col items-center gap-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-center"
      >
        Nuestro <span className='text-[#ECC82C] '>Blog</span> 
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-center text-slate-700 max-w-3xl"
      >
        Novedades, análisis y artículos de opinión elaborados por nuestros especialistas para mantener tu negocio informado y actualizado.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px]">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            className="bg-white rounded-xl shadow-md cursor-pointer p-6 flex flex-col gap-4 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 text-[#002B70] font-semibold text-sm">
              <i className={`${post.icon} text-lg`}></i>
              {post.category}
            </div>
            <h3 className="text-xl  text-slate-900">{post.title}</h3>
            <p className="text-slate-600 text-sm">{post.excerpt}</p>
            <a
              href={post.link}
              className="mt-auto text-[#ECC82C] font-semibold text-sm hover:underline"
            >
              VER MÁS +
            </a>
          </motion.article>
        ))}
      </div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        href="/blog"
        className="bg-[#ECC82C] text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition"
      >
        Ver todas las publicaciones
      </motion.a>
    </section>
  );
};

export default BlogInvitation;