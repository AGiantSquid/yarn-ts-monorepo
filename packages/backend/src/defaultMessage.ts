import { __TEST_CONSTANT__ } from '@yarn-ts-monorepo/common/constants/debug';
import { Message } from '@yarn-ts-monorepo/common/types/message';

export const defaultMessage: Message = {
    id: '1',
    content: `Displaying value from common package to verify reloading on the backend works: ${__TEST_CONSTANT__}`,
    timestamp: new Date().toISOString(),
    author: 'System',
};