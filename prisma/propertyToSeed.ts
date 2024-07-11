export interface PropertyToSeed {
    id: number
    slug: string
    created_at: string
    updated_at: string
    finishing: string
    property_metadata_id: number
    ready_by: string
    payment_plan_id: any
    company_id: any
    description: string
    map_name: any
    map_path: any
    medium_quality_map_name: any
    medium_quality_map_path: any
    low_quality_map_name: any
    low_quality_map_path: any
    map: Map
    priority: number
    apply_priority: boolean
    customer_id: any
    publish: any
    agent_phone_number: any
    agent_name: any
    organization_id: any
    financing: any
    resale_client_id: any
    organization_unit_id: any
    developer_unit_id: any
    status: any
    is_hidden: boolean
    is_converted: any
    launch_date: any
    release_date: any
    one_line_description: string
    all_slugs: AllSlugs
    payment_plan: PaymentPlan
    payment_plans: PaymentPlan2[]
    number_of_bathrooms: number
    number_of_bedrooms: number
    number_of_floors: any
    resale: boolean
    seo_backlinks: SeoBacklink[]
    floor_plans: FloorPlan[]
    images: Image2[]
    property_type: PropertyType
    compound: Compound
    name: string
    seo_title: string
    seo_description: string
    seo_keywords: string
    map_x: any
    map_y: any
    accurate_location: boolean
    featured: boolean
    sponsored: number
    price: any
    sort: number
    notes: any
    is_duplicate: any
    compound_neighborhood_id: any
    compound_property_type_id: any
    compound_id: number
    property_type_id: number
    developer_type: string
    groupping_str: string
    compound_developer_type_id: number
    entry_type: string
    offers: any[]
    amenities: Amenity[]
    display_name: string
    recommended_financing: RecommendedFinancing
    tags: any[]
    has_forecast: boolean
    min_unit_area: number
    max_unit_area: number
    min_land_area: number
    max_land_area: number
    max_garden_area: number
    max_roof_area: number
    max_terrace_area: number
    min_price: number
    max_price: number
    min_ready_by: string
    max_ready_by: string
    currency: string
    on_sale: boolean
    features: any[]
  }
  
  export interface Map {
    url: any
    low: Low
    medium: Medium
  }
  
  export interface Low {
    url: any
  }
  
  export interface Medium {
    url: any
  }
  
  export interface AllSlugs {
    ar: string
    en: string
  }
  
  export interface PaymentPlan {
    id: number
    name: any
    month_3: Month3
    month_6: Month6
    delivery_payment: DeliveryPayment
    equal_installments: EqualInstallments
    maintenance: Maintenance
    clubhouse: any
    parking: any
    years: number
    cash_discount: CashDiscount
    down_payment: DownPayment
  }
  
  export interface Month3 {
    value: any
    percent: any
  }
  
  export interface Month6 {
    value: any
    percent: any
  }
  
  export interface DeliveryPayment {
    value: any
    percent: any
  }
  
  export interface EqualInstallments {
    value: number
    percent: number
  }
  
  export interface Maintenance {
    value: any
    percent: any
  }
  
  export interface CashDiscount {
    value: any
    percent: any
  }
  
  export interface DownPayment {
    value: number
    percent: number
  }
  
  export interface PaymentPlan2 {
    id: number
    name: any
    month_3: Month32
    month_6: Month62
    delivery_payment: DeliveryPayment2
    equal_installments: EqualInstallments2
    maintenance: Maintenance2
    clubhouse: any
    parking: any
    years: number
    cash_discount: CashDiscount2
    down_payment: DownPayment2
  }
  
  export interface Month32 {
    value: any
    percent: any
  }
  
  export interface Month62 {
    value: any
    percent: any
  }
  
  export interface DeliveryPayment2 {
    value: any
    percent: any
  }
  
  export interface EqualInstallments2 {
    value: number
    percent: number
  }
  
  export interface Maintenance2 {
    value: any
    percent: any
  }
  
  export interface CashDiscount2 {
    value: any
    percent: any
  }
  
  export interface DownPayment2 {
    value: number
    percent: number
  }
  
  export interface SeoBacklink {
    name: string
    slug: string
  }
  
  export interface FloorPlan {
    id: number
    image_name: string
    image_path: string
    title: string
    created_at: string
    updated_at: string
    image: Image
    property_metadata_id: number
    assets_zipped: any
  }
  
  export interface Image {
    url: string
  }
  
  export interface Image2 {
    id: number
    image_name: string
    image_path: string
    medium_quality_image_name: string
    medium_quality_image_path: string
    low_quality_image_name: string
    low_quality_image_path: string
    cover_photo: boolean
    created_at: string
    updated_at: string
    image: Image3
    property_metadata_id: number
  }
  
  export interface Image3 {
    url: string
    low: Low2
    medium: Medium2
  }
  
  export interface Low2 {
    url: string
  }
  
  export interface Medium2 {
    url: string
  }
  
  export interface PropertyType {
    id: number
    name: string
    created_at: string
    updated_at: string
    manual_ranking: number
    icon: Icon
  }
  
  export interface Icon {
    url: string
  }
  
  export interface Compound {
    id: number
    name: string
    slug: string
    description: string
    area_id: number
    seo_title: string
    seo_description: string
    seo_keywords: string
    lat: number
    long: number
    map_name: string
    map_path: string
    medium_quality_map_name: string
    medium_quality_map_path: string
    low_quality_map_name: string
    low_quality_map_path: string
    payment_terms: string
    payment_terms_path: string
    developer_id: number
    created_at: string
    updated_at: string
    not_launched: boolean
    sponsored: number
    has_offer: boolean
    offer_desc: string
    payment_terms_doc: PaymentTermsDoc
    map: Map2
    manual_ranking: number
    commission: string
    fake: boolean
    project_type: any
    project_area: any
    general_ranking: number
    update_priority: string
    project_area_unit: any
    status: string
    availability_last_update: number
    manual_last_update: any
    on_hold: boolean
    parent_compound_id: any
    is_super: boolean
    mapping_id: number
    compound_outline_id: any
    offer_title: string
    cover_image: CoverImage
    cover_image_name: string
    cover_image_path: string
    update_expiry_dayes: any
    inventory_public: boolean
    is_manual: any
    map_width: any
    recently_launch_ranking: any
    advertising_image: AdvertisingImage
    video: Video
    we_dont_sell: boolean
    nawy_organization_id: any
    livable: any
    has_resale_estimate: boolean
    northcoast_km: any
    location_point: any
    polygon_points: any
    meta_title: any
    meta_description: any
    all_slugs: AllSlugs2
    area: Area
    developer: Developer
  }
  
  export interface PaymentTermsDoc {
    url: any
  }
  
  export interface Map2 {
    url: string
    low: Low3
    medium: Medium3
  }
  
  export interface Low3 {
    url: string
  }
  
  export interface Medium3 {
    url: string
  }
  
  export interface CoverImage {
    url: any
  }
  
  export interface AdvertisingImage {
    url: any
  }
  
  export interface Video {
    url: any
  }
  
  export interface AllSlugs2 {
    ar: string
    en: string
  }
  
  export interface Area {
    name: string
    slug: string
  }
  
  export interface Developer {
    id: number
    name: string
    description: string
    logo_path: string
    slug: string
    developer_compounds: DeveloperCompound[]
    no_of_properties: number
  }
  
  export interface DeveloperCompound {
    id: number
    slug: string
    name: string
    is_super: boolean
    sponsored: number
    image: string
    properties_count: number
  }
  
  export interface Amenity {
    id: number
    name: string
    image: Image4
    value: string
    created_at: string
    updated_at: string
    image_name?: string
    image_path?: string
    is_compound_amenity: boolean
    is_property_amenity: boolean
  }
  
  export interface Image4 {
    url?: string
  }
  
  export interface RecommendedFinancing {
    id: number
    slug: string
    name: string
    property_type: PropertyType2
    compound: Compound2
    area: Area2
    developer: Developer2
    image: string
    finishing: string
    min_unit_area: number
    max_unit_area: number
    min_price: number
    max_price: number
    currency: string
    max_installment_years: number
    min_installments: number
    min_down_payment: number
    number_of_bathrooms: number
    number_of_bedrooms: number
    min_ready_by: string
    sponsored: number
    new_property: boolean
    company: any
    resale: boolean
    financing: boolean
    type: string
    has_offers: boolean
    offer_title: any
    limited_time_offer: boolean
    in_quick_search: any
    recommended: any
    manual_ranking: any
    completeness_score: any
    favorite: boolean
    ranking_type: any
    recommended_financing: any
    property_ranking: any
    compound_ranking: any
    tags: string[]
  }
  
  export interface PropertyType2 {
    id: number
    name: string
    manual_ranking: number
  }
  
  export interface Compound2 {
    id: number
    lat: number
    long: number
    name: string
    slug: string
    sponsored: number
    nawy_organization_id: number
  }
  
  export interface Area2 {
    id: number
    name: string
  }
  
  export interface Developer2 {
    id: number
    name: string
    slug: string
    logo_path: string
  }
  