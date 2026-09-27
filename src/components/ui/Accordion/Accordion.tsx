import { useState, useId, type ReactNode } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItemData {
  id?: string;
  title: ReactNode;
  content: ReactNode;
  badge?: string;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return items
      .map((item, idx) => (item.defaultOpen ? item.id || `acc-${idx}` : null))
      .filter((id): id is string => id !== null);
  });

  const baseId = useId();

  const toggle = (itemId: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(itemId);
      if (allowMultiple) {
        return isOpen ? prev.filter((id) => id !== itemId) : [...prev, itemId];
      } else {
        return isOpen ? [] : [itemId];
      }
    });
  };

  return (
    <div className={[styles.accordion, className].filter(Boolean).join(' ')}>
      {items.map((item, idx) => {
        const itemId = item.id || `${baseId}-item-${idx}`;
        const headerId = `${itemId}-header`;
        const panelId = `${itemId}-panel`;
        const isOpen = openIds.includes(itemId);

        return (
          <div
            key={itemId}
            className={[styles['accordion-item'], isOpen ? styles['is-open'] : '']
              .filter(Boolean)
              .join(' ')}
          >
            <h3 className={styles['accordion-heading']}>
              <button
                id={headerId}
                type="button"
                className={styles['accordion-trigger']}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(itemId)}
              >
                <div className={styles['accordion-title-wrap']}>
                  {item.badge && <span className={styles['accordion-badge']}>{item.badge}</span>}
                  <span className={styles['accordion-title']}>{item.title}</span>
                </div>
                <span className={styles['accordion-icon']} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={styles['accordion-panel']}
              hidden={!isOpen}
            >
              <div className={styles['accordion-content']}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
