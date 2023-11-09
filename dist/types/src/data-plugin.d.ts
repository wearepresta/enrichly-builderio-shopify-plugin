import { APIOperations } from '@builder.io/data-plugin-tools';
import { CommerceAPIOperations } from '@builder.io/commerce-plugin-tools';
interface DataPluginConfig extends APIOperations {
    name: string;
    icon: string;
}
export declare const getDataConfig: (service: CommerceAPIOperations) => DataPluginConfig;
export {};
