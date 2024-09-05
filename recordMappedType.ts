let dictionary: Record<string, typeof item> = {};

interface TrackStates {
    current: string,
    next: string,
};

type MyRecord<K extends string, T> = {
    [P in K]: T
};

const item: Record<keyof TrackStates, string> = {
    current: '1xf01bt',
    next: '89b4gr0',
};

// Numbers are coereced to String
dictionary[0] = item;
