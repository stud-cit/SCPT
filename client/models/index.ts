export interface Pages {
    title: string;
    icon: string;
    to: string;
}
export interface photos {
    src: string;
    title: string;
    dialog: boolean;
}
export interface documents {
    title: string;
    link: string;
}
export interface Bar {
    title: string;
    icon: string;
}

export interface Invites {
    icon: string;
    to: string;
}
export interface News {
    title: string;
    prew_text: string;
    prew_img: string;
}

export interface Message {
    status: string;
    context: string;
}

export interface Error {
    statusCode: string;
}
