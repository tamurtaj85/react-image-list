import { ReactNode } from 'react';

type ImageListItemBarProps = {
  position?: 'top' | 'bottom' | 'below';
  actionIcon?: ReactNode;
  actionPosition?: 'left' | 'right';
  title?: ReactNode;
  subTitle?: ReactNode;
} & Pick<React.ComponentPropsWithoutRef<'div'>, 'className' | 'style'>;

export const ImageListItemBar: React.FC<ImageListItemBarProps> = ({
  position = 'bottom',
  actionIcon,
  actionPosition = 'right',
  title,
  subTitle,
  style,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        position: position === 'below' ? 'relative' : 'absolute',
        inset:
          position === 'bottom'
            ? 'auto 0 0'
            : '0 0 auto' /* top left/right bottom */,
        zIndex: 'auto',
        //
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        color: 'white',
        //
        padding: '8px',
        //
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        //
        transition: 'background-color 0.3s ease',
        //
        ...style,
      }}
    >
      <div
        style={{
          order: actionPosition === 'left' ? 2 : 1,
          width: '75%',
        }}
      >
        {title && (
          <div
            role='heading'
            style={{
              fontSize: '16px',
              //
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </div>
        )}
        {subTitle && (
          <div
            role='contentinfo'
            style={{
              fontSize: '12px',
              //
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {subTitle}
          </div>
        )}
      </div>
      {actionIcon && (
        <div
          style={{
            order: actionPosition === 'left' ? 1 : 2,
            width: '25%',
          }}
        >
          {actionIcon}
        </div>
      )}
    </div>
  );
};
