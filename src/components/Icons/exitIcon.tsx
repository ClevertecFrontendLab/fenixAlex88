import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const Svg = () => (
    <svg width='16.000000' height='16.000000' viewBox='0 0 16 16' fill='var(--neutral-gray-13)'>
        <path d='m3.7462 7.394v-1.525c0-0.06785-0.07678-0.10714-0.13036-0.06428l-2.6964 2.1321c-0.009585 0.00756-0.017332 0.01719-0.022659 0.02817s-0.008094 0.02302-0.008094 0.03522c0 0.01221 0.002767 0.02425 0.008094 0.03523s0.013074 0.02061 0.022659 0.02817l2.6964 2.1339c0.05179 0.0411 0.13036 0.0036 0.13036-0.0642v-1.525h6.9202v-1.2143h-6.9202z' />
        <path d='m4.6272 0.92969h9.4202c0.2768 0 0.5 0.22321 0.5 0.5v13.143c0 0.2768-0.2232 0.5-0.5 0.5h-9.4202c-0.27678 0-0.5-0.2232-0.5-0.5v-3c0-0.0392 0.03215-0.0714 0.07143-0.0714h1.0714c0.03929 0 0.07143 0.0322 0.07143 0.0714v2.2858h7.9916v-11.714h-7.9916v2.2857c0 0.03928-0.03214 0.07143-0.07143 0.07143h-1.0714c-0.03928 0-0.07143-0.03215-0.07143-0.07143v-3c0-0.27679 0.22322-0.5 0.5-0.5z' />
    </svg>
);

export const ExitIcon: React.FC = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Svg} {...props} />
);
