// 어떻게 타입 스크립트가 localStorage를 아는지 설명 ( declare )

interface Config{
    url: string;
}

declare module "myPackage" {
    function init(config: Config) : boolean;
    function exit(code: number) : number;
}