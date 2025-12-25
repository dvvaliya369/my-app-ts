interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="p-6 bg-white border border-zinc-200 rounded-2xl hover:shadow-lg transition-shadow dark:bg-zinc-900 dark:border-zinc-800">
      {icon && (
        <div className="mb-4 text-zinc-900 dark:text-white">{icon}</div>
      )}
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
