import { BodyType, ButtonElement, ButtonLoginService, ButtonUrlWebviewType, ComparisonActionType, ComparisonType, DateDisplay, DateInput, DateOutput, FallbackType, FormatCheckType, MappingType, MediaType, OperationOptions, OperationType, OptionBehaviorType, QuickReplyContentType, RequestType, TemplateCarrousel, TemplateList, TemplateQuickReplies, TemplateType } from './types';
import { NlpService } from '../bot/types';
export interface BotNode {
    key: string;
    name: string;
    template: NodeTemplate;
    mapping: NodeMapping;
    createdAt: Date;
    createdBy: string;
}
export interface NodeTemplate {
    type: TemplateType;
    templateText?: TemplateText;
    templateQuickReplies?: TemplateQuickReplies;
    templateButton?: TemplateButtons;
    templateMedia?: TemplateMedia;
    templateList?: TemplateList;
    templateGeneric?: TemplateCarrousel;
    templateReceipt?: TemplateReceipt;
    templateOpenGraph?: TemplateOpenGraph;
}
export interface TemplateText {
    text: string;
}
export interface TemplateQuickRepliesManual {
    feedType: 'manual';
    quickReplies: QuickReplyElement[];
}
export interface TemplateQuickRepliesAuto {
    feedType: 'auto';
    autoOptions: QuickRepliesAutoOptions;
}
export interface QuickRepliesAutoOptions {
    listKey?: string;
    title?: string;
    imageUrl?: string;
    targetNode?: string;
    fallbackNode?: string;
    operations?: DataOperation[];
}
export interface QuickReplyElement {
    contentType: QuickReplyContentType;
    title?: string | number;
    targetNode?: string;
    imageUrl?: string;
    operations?: DataOperation[];
}
export interface TemplateButtons {
    text: string;
    buttons: ButtonElement[];
}
export interface ButtonElementPostback {
    type: 'postback';
    title?: string;
    targetNode?: string;
    operations?: DataOperation[];
}
export interface ButtonElementUrl {
    type: 'url';
    title?: string;
    url: string;
    openNewTab?: boolean;
    messengerExtensions?: boolean;
    webviewHeightRatio?: ButtonUrlWebviewType;
}
export interface ButtonElementLogin {
    type: 'login';
    title?: string;
    service: ButtonLoginService;
    targetNodeLoginSuccess: string;
    targetNodeLoginFailure: string;
    dataProfileKey: string;
}
export interface ButtonElementCall {
    type: 'call';
    title: string;
    phoneNumber: number;
}
export interface ButtonElementShare {
    type: 'share';
    title: string;
}
export interface TemplateMedia {
    intro?: string;
    elements: MediaElement[];
}
export interface MediaElement {
    mediaType: MediaType;
    url?: string;
    buttons?: ButtonElement[];
}
export interface GenericElement {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    defaultAction?: ButtonElement;
    buttons?: ButtonElement[];
}
export interface GenericAutoOptions {
    listKey: string;
    title?: string;
    subtitle?: string;
    picture?: string;
    fallbackNode?: string;
    defaultAction?: ButtonElement;
    buttons?: ButtonElement[];
}
export interface TemplateGenericManual {
    feedType: 'manual';
    elements: GenericElement[];
}
export interface TemplateGenericAuto {
    feedType: 'auto';
    autoOptions: GenericAutoOptions;
}
export interface TemplateReceipt {
    recipientName?: string;
    orderNumber?: string;
    currency?: string;
    paymentMethod?: string;
    orderUrl?: string;
    timestamp?: string;
    address?: {
        street1?: string;
        street2?: string;
        city?: string;
        postalCode?: string;
        state?: string;
        country?: string;
    };
    summary?: {
        totalCost?: number;
        subtotal?: number;
        shippingCost?: number;
        totalTax?: number;
    };
    adjustments?: Array<{
        name?: string;
        amount?: number;
    }>;
    elements?: ReceiptElement[];
}
export interface ReceiptElement {
    title: string;
    subtitle?: string;
    quantity?: number;
    price: number;
    currency?: string;
    imageUrl?: string;
}
export interface TemplateOpenGraph {
    elements: OpenGraphElement[];
}
export interface OpenGraphElement {
    url: string;
    buttons: ButtonElement[];
}
export interface NodeMapping {
    type: MappingType;
    dataInput?: MappingDataInput;
    goToNode?: MappingGoToNode;
    switch?: MappingSwitch;
    actions: MappingAsyncAction[];
    options: MappingOptions;
}
export interface MappingDataInput {
    triggers: TriggersOptions;
    nlp: NlpOptions;
    saveData: SaveDataOptions;
    fallback: FallbackOptions;
}
export interface TriggersOptions {
    active: boolean;
    options?: Trigger[];
}
export interface Trigger {
    value: string;
    targetNode: string;
}
export interface NlpOptions {
    active: boolean;
    options?: {
        service: NlpService;
        intents: NlpTrigger[];
        storage: SaveNlpOptions;
    };
}
export interface SaveNlpOptions {
    active: boolean;
    options?: {
        input?: string;
        intent?: string;
        entities?: {
            [key: string]: EntityMapping;
        };
    };
}
export interface EntityMapping {
    name?: string;
    values?: {
        key: string;
        isMultipleValue?: boolean;
    };
}
export interface NlpTrigger {
    intent: string;
    entity: string;
    targetNode: string;
}
export interface SaveDataOptions {
    active: boolean;
    options?: {
        key?: string;
        targetNode?: string;
        formatCheck?: FormatCheckType;
        customFormat?: string;
        dateDisplay?: DateDisplay;
        dateInput?: DateInput;
        dateOutput?: DateOutput;
        targetNodeIfCheckFails?: string;
    };
}
export interface FallbackOptions {
    active: boolean;
    options?: {
        type?: FallbackType;
        targetNode?: string;
        message?: string;
        url?: string;
    };
}
export interface MappingGoToNode {
    active: boolean;
    options?: {
        targetNode?: string;
        waitForInput?: boolean;
        operations?: DataOperation[];
    };
}
export interface MappingSwitch {
    assertEqual: AssertEqualOptions;
    performOperations: PerformOperationsOptions;
    sendToExternalApi: SendToExternalApiOptions;
}
export interface AssertEqualOptions {
    active: boolean;
    comparisons?: DataComparison[];
}
export interface PerformOperationsOptions {
    active: boolean;
    options?: {
        operations?: DataOperation[];
        targetNode?: string;
    };
}
export interface SendToExternalApiOptions {
    active: boolean;
    options?: {
        headers?: string;
        body?: string;
        data?: ApiData;
        fallbackNode?: string;
        method?: RequestType;
        targetNode?: string;
        timeout?: number;
        url?: string;
        bodyType?: BodyType;
    };
}
interface ApiData {
    active?: boolean;
    arrayPath?: string;
    key?: string;
    mapping?: any;
    type?: 'object' | 'array';
}
export interface EmailAsyncAction {
    from: string;
    addresses: string[];
    title: string;
    content: string;
}
export interface ApiAsyncAction {
    method: RequestType;
    url: string;
    headers?: string[];
    body?: {
        type: 'TEXT' | 'JSON';
        value: string;
    };
}
export interface WorkflowAsyncAction {
    node: string;
}
export interface OperationsAsyncAction {
    operations: DataOperation[];
}
export interface AsyncAction {
    type: 'email' | 'api' | 'workflow' | 'operations';
    name: string;
    optionsEmail: EmailAsyncAction;
    optionsApi: ApiAsyncAction;
    optionsWorkflow: WorkflowAsyncAction;
    optionsOperations: OperationsAsyncAction;
}
export interface MappingAsyncAction {
    trigger: 'enter' | 'leave';
    action: AsyncAction;
}
export interface MappingOptions {
    behaviorMedia: MappingOptionBehavior;
    behaviorGeoloc: MappingOptionBehavior;
    isSystemNode?: boolean;
}
export interface MappingOptionBehavior {
    active: boolean;
    options?: {
        type?: OptionBehaviorType;
        message?: string;
        targetNode?: string;
        url?: string;
    };
}
export interface DataRichSegment {
    type?: 'literal' | 'key' | 'element';
    value?: string;
}
export interface DataOperation {
    type: OperationType;
    key: string;
    operand?: DataRichSegment;
    options?: OperationOptions;
}
export interface DataBoundedOperationOptions {
    isInteger: boolean;
    upperBound: DataRichSegment;
    lowerBound: DataRichSegment;
}
export interface DataSearchOperationOptions {
    searchable?: string;
    key: DataRichSegment;
    type: ComparisonType;
    comparator?: DataRichSegment;
    ifTrue?: string;
    ifFalse?: string;
}
export interface DataComposedOperationOptions {
    separator?: DataRichSegment;
    replacement?: DataRichSegment;
    object?: DataRichSegment;
    source?: DataRichSegment[];
}
export interface ComparisonAction {
    type?: ComparisonActionType;
    targetNode?: string;
}
export interface DataComparison {
    key: DataRichSegment;
    type: ComparisonType;
    comparator?: DataRichSegment;
    ifTrue: ComparisonAction;
    ifFalse: ComparisonAction;
}
export {};
