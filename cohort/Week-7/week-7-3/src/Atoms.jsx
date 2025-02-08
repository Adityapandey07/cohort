import { atom, selector } from "recoil";

export const networkAtom = atom({
        key: "network",
        default: 104
});

export const jobAtom = atom({
        key: "job",
        default: 10
});

export const notificationAtom = atom({
        key: "notification",
        default: 89
});

export const messageAtom = atom({
        key: "message",
        default: 24
})

export const totalNotificationSelector = selector({
        key: "totalNotificationSelector",
        get: ({get}) =>{
                const networkAtomCount = get(networkAtom);
                const jobAtomCount = get(jobAtom);;
                const notificationAtomCount = get(notificationAtom);
                const messageAtomCount = get(messageAtom);

                return networkAtomCount + jobAtomCount + notificationAtomCount + messageAtomCount;
        }
})