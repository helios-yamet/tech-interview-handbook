import type { ReactNode } from 'react';

type RightTextCarddProps = Readonly<{
  description: string;
  icon: ReactNode;
  imageAlt: string;
  imageSrc: string;
  title: string;
}>;

const baseUrl = '/offers/home';
export default function RightTextCard({
  description,
  icon,
  imageAlt,
  imageSrc,
  title,
}: RightTextCarddProps) {
  return (
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
              {icon}
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{description}</p>
            <div className="mt-6">
              <a
                className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                href={baseUrl}>
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
        <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            alt={imageAlt}
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  );
}
