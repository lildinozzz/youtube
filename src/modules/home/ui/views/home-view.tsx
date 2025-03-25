import { CategoriesSection } from "../sections/categories-section";

type HomeViewProps = {
  categoryId: string;
};

export const HomeView = (props: HomeViewProps) => {
  const { categoryId } = props;

  return (
    <div className="max-w-[2400px] mx-auto px-4 mb-10 pt-2.5 flex flex-col gap-y-6">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};
