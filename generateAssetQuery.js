const { v4: uuidv4 } = require('uuid');
const imgs = [
    "egnyte_98C76C20_215.png",
    "githubcom_59A4B632_215.png",
    "fabrikamenterprisemanageduseroidc_19A63917_215.png",
    "figma_6FA5C230_215.png",
    "junojourney_75623402_215.png",
    "dynamicsignal_8FF37989_215.png",
    "directprintiocloudprintadminstration_1E617AAE_215.png",
    "salesforcedice_6DA3B94D_215.png",
    "eletive_BC0503CA_215.png",
    "druva_D4F1198F_215.png",
    "dropbox_6C36DDCC_215.png",
    "jostle_48EF47CD_215.png",
    "ipasssmartconnect_A89CE2E6_215.png",
    "island_9F4B3A26_215.png",
    "kisiphysicalsecurity_6AC0DFAB_215.png",
    "irisintranet_F06EF1D5_215.png",
    "uniflowonline_89990CFE_215.png",
    "alohi_3A7ECF51_215.png",
    "grouptalk_263ABECF_215.png",
    "harness_1D86F8C8_215.png",
    "asana_471F9A2D_215.png",
    "8x8virtualoffice_44A34905_215.png",
    "twingate_4A0096F7_215.png",
    "mx3diagnosticsconnector_4340D872_215.png",
    "alexishr_42694222_215.png",
    "evercate_C1C15CD0_215.png",
    "federateddirectory_83363B97_215.png",
    "tapappsecurity_10703CB3_215.png",
    "elium_CE1052D8_215.png",
    "diffchecker_5ADD073A_215.png",
    "zendesk_35384C86_215.png",
    "vonage_4E0D28B4_215.png",
    "flock_81AC1A8A_215.png",
    "forcepointcloudsecuritygateway_4E505618_215.png",
    "elia_8F2E8709_215.png",
    "DCS_400763AD_215.png",
    "zscalerthree_E1222716_215.png",
    "zscalerone_E1222716_215.png",
    "xledger_1B96CE81_215.png",
    "yardione_3E1288BA_215.png",
    "dialpad_ED9474B9_215.png",
    "exium_20ECE239_215.png",
    "FacebookAtWork_E0EEC885_215.png",
    "aad2aadsync_6DA3B94D_215.png",
    "fuze_0116279E_215.png",
    "helloid_88AC6CDF_215.png",
    "travelperk_4E0CF44F_215.png",
    "jiveon_BFE9703C_215.png",
    "dagstercloud_6F22E5AF_215.png",
    "realtimeboard_07E7117C_215.png",
    "sharefile_04A902D0_215.png",
    "offishall_1F430333_215.png",
    "airbase_E156F7E8_215.png",
    "code42_3328B011_215.png",
    "gtmhub_90198A3B_215.png",
    "tribeloo_4435BB7F_215.png",
    "sapcloudidentity_8B1604C1_215.png",
    "cofense_DFD12FEF_215.png",
    "introduspreandonboardingplatform_A8BE7A4B_215.png",
    "concur_70E03B48_215.png",
    "cleanmailswiss_54585EFC_215.png",
    "linkedinlookup_B8D516A4_215.png",
    "lusid_1A2E6929_215.png",
    "kpngrip_F49642E6_215.png",
    "leapsome_2C38BC1E_215.png",
    "ghae_593D586E_215.png",
    "funnelleasing_EA7ED8EE_215.png",
    "insight4grc_5F7EC9EC_215.png",
    "hypervault_9BC47C36_215.png",
    "workteam_BF5C681B_215.png",
    "akamaieaa_E7673183_215.png",
    "webcargoair_A94546F0_215.png",
    "contentful_15D0593B_215.png",
    "autodesksso_C71675EF_215.png",
    "inforcloudsuite_302379CC_215.png",
    "cinode_9BBF13EC_215.png",
    "thrivelxp_BE09BA02_215.png",
    "aws_FC86917E_215.png",
    "tictacmobile_B82D695B_215.png",
    "cerner_F0EB5933_215.png",
    "atlassiancloud_63C1DF29_215.png",
    "templafy_12BA9B93_215.png",
    "alertmedia_63405B63_215.png",
    "templafyopenidconnect_2AEFB52E_215.png",
    "britive_989F5CBD_215.png",
    "bis_2FD7C2B8_215.png",
    "keeperpasswordmanager_C18AE1FA_215.png",
    "checkproof_997D6B00_215.png",
    "timeclock365_90161DA5_215.png",
    "wedo_FA7BCBA9_215.png",
    "hoxhunt_D3DA4D11_215.png",
    "zero_68F6930C_215.png",
    "newreliclimitedrelease_640C4E76_215.png",
    "clearviewtrade_645F4AFA_215.png",
    "cerby_ACB6652A_215.png",
    "chaos_6452A87F_215.png",
    "teamviewer_E375CDE4_215.png",
    "klaxoonsaml_25CFD175_215.png",
    "embedsignage_6E840F2A_215.png",
    "comeetrecruitingsoftware_DDA921D6_215.png",
    "howspace_0C47C68D_215.png",
    "wiggledesksso_6D394457_215.png",
    "cybsafe_79535C7E_215.png",
    "culturehq_846CCA3A_215.png",
    "adobeidentitymanagement_31E36135_215.png",
    "uber_19180A30_215.png",
    "peakon_1A2C9B75_215.png",
    "zscalertwo_E1222716_215.png",
    "customapponpremesissso_6DA3B94D_215.png",
    "acunetix360_5333A01C_215.png",
    "foodee_E029848B_215.png",
    "15five_04BA6EC0_215.png",
    "documo_F7475D21_215.png",
    "grammarly_A3DE3C8F_215.png",
    "bicclouddesign_4133AD1D_215.png",
    "oraclecloud_94BD424E_215.png",
    "zscaler_E1222716_215.png",
    "oraclefusionerp_47991224_215.png",
    "collabcomyday_68AF7CC5_215.png",
    "peripassv1_6FD3DE7B_215.png",
    "netskopeuserauthentication_97C8CFFC_215.png",
    "salesforce.com_82EB9406_215.png",
    "mfiles_EEF4DA71_215.png",
    "cybozu_DF2F5B3B_215.png",
    "coda_C179F6C4_215.png",
    "symantecwebsecurityservice_088AF96D_215.png",
    "signinenterprise_A2DB2B0C_215.png",
    "slack_BA2EAFA8_215.png",
    "smallstepsshv2_81889543_215.png",
    "webroot_543299F6_215.png",
    "litmos_ED4F17A4_215.png",
    "starleaf_2D6038B4_215.png",
    "ciscoUmbrellaUserManagment_85389752_215.png",
    "recnice_4662A7B6_215.png",
    "albert_483A0E48_215.png",
    "tailscale_CBACD91F_215.png",
    "visibly_2885AFB6_215.png",
    "astro_050891BB_215.png",
    "rewardgateway_79083402_215.png",
    "velpicsaml_1F8DB904_215.png",
    "bonusly_608737C9_215.png",
    "mypolicies_EA76DDB2_215.png",
    "sigmacomputing_C2B4FD5A_215.png",
    "vmwareidentityservice_CE7FC11E_215.png",
    "googleapps_CF07EA93_215.png",
    "githubenterprisemanageduser_19A63917_215.png",
    "puzzel_E7283BC2_215.png",
    "facebookworkaccounts_6032C9EE_215.png",
    "whimsical_A9EE563F_215.png",
    "unifi_8F4AD338_215.png",
    "mondaycom_111B7D8F_215.png",
    "sfsandbox_82EB9406_215.png",
    "datadog_EE1E66F0_215.png",
    "gong_21119F9E_215.png",
    "rfpio_F9DE03F1_215.png",
    "schoolstreamasa_6D38CCEC_215.png",
    "informacast_548FB82D_215.png",
    "zoom_B54DC752_215.png",
    "smartsheet_1948F89B_215.png",
    "headspace_C85AFE00_215.png",
    "adobeidentitymanagementoidc_6E772264_215.png",
    "insightlysaml_4DE63269_215.png",
    "insitelms_D3C37F36_215.png",
    "robin_CB26586A_215.png",
    "Zillah_400763AD_215.png",
    "successcenter_2129B7AD_215.png",
    "getabstract_C103FFD3_215.png",
    "wats_BFA116E2_215.png",
    "iprova_16E85807_215.png",
    "API2AAD_33ECBFD8_215.png",
    "atea_E92C3B73_215.png",
    "zip_62F055FE_215.png",
    "cloudacademysso_86977AC5_215.png",
    "gettyimagessaml_6200402D_215.png",
    "askspoke_80CF72D5_215.png",
    "zapier_9AF62EF1_215.png",
    "axissecurity_54C112BF_215.png",
    "mediusflow_D066F85B_215.png",
    "betterstack_C68D6D53_215.png",
    "azuredatabricks_1A3A02FF_215.png",
    "auditboard_4125DFDF_215.png",
    "purecloudbygenesys_D5884F00_215.png",
    "mobileiron_34D19565_215.png",
    "notion_93B21ED7_215.png",
    "unitelas_76DF4142_215.png",
    "theorgwiki_1D1D30B1_215.png",
    "invitedesk_5BC24931_215.png",
    "blink_A5535AF4_215.png",
    "klaxoon_1DFED162_215.png",
    "prodpad_87A73673_215.png",
    "4me_1A7E2C93_215.png",
    "alvao_AEF3840F_215.png",
    "docusign_35013B72_215.png",
    "bitabiz_D38E95BC_215.png",
    "envoy_A6012385_215.png",
    "moqups_FA7D819C_215.png",
    "sapbusinessobjectscloud_AE17F43A_215.png",
    "zscloud_E1222716_215.png",
    "vaultplatform_1C7F012C_215.png",
    "ideagen_9FDB08E2_215.png",
    "clarizen_2FD4E63F_215.png",
    "goskills_79D58E9F_215.png",
    "awssinglesignon_FC86917E_215.png",
    "holmes_2F8E7398_215.png",
    "opentextxmfax_57408181_215.png",
    "connecter_EA6EE0AE_215.png",
    "API2AD_33ECBFD8_215.png",
    "wrikesaml_BFB45378_215.png",
    "veritasentvaultcloudsso_F3B280CB_215.png",
    "gotomeeting_AA16271F_215.png",
    "frankli_BC55D087_215.png",
    "yellowbox_F1C07A50_215.png",
    "opentextdirectoryservices_A4F68F58_215.png",
    "globalrelayidentitysync_352FF2F5_215.png",
    "ideo_5D08704E_215.png",
    "golinks_8206E771_215.png",
    "zscalerbeta_E1222716_215.png",
    "canva_DB2A13EB_215.png",
    "githubenterpriseserver_19A63917_215.png",
    "talentech_05B21ECB_215.png",
    "amazonbusiness_DCCB35B4_215.png",
    "proware_7D0F6D2D_215.png",
    "zscalerprivateaccess_57B2CC39_215.png",
    "kno2fy_ABE24737_215.png",
    "vclient_BCEFD79B_215.png",
    "lucid_CF9F811F_215.png",
    "linkedinlearning_D44D0DA5_215.png",
    "lucidchart_04A30F74_215.png",
    "joynfsm_C5F1389F_215.png",
    "invision_DAA53BDD_215.png",
    "postman_FAD4978C_215.png",
    "rhombussystems_79335D29_215.png",
    "preciate_5DEE9A3D_215.png",
    "oneflow_35B01FBE_215.png",
    "screensteps_D230AD38_215.png",
    "hootsuite_72F51C0B_215.png",
    "openforms_64639DD4_215.png",
    "prioritymatrixv1_670F9FD7_215.png",
    "pingboard_5916579C_215.png",
    "paloaltonetworksidentityauthentication_F3FFBC2D_215.png",
    "nordpasssso_82BFBE06_215.png",
    "promapp_8F0696A1_215.png",
    "solarwindsmsp_5F8E4B65_215.png",
    "papercutpocket_3B0D0E2B_215.png",
    "paloaltonetworks_F3FFBC2D_215.png",
    "netsparkerenterprise_7384AC57_215.png",
    "printerlogicsaas_602C4BCE_215.png",
    "muralidentity_A6758930_215.png",
    "sasviyasso_18075E60_215.png",
    "personifyinc_FB3CDA66_215.png",
    "rollbar_E5C5348F_215.png",
    "simpleinout_0E4BA41D_215.png",
    "samanage_703FF24F_215.png",
    "securelogin_873DE35F_215.png",
    "plandisc_6D2761EE_215.png",
    "safeguardcyber_DE7BD3B7_215.png",
    "oreillylearningplatform_4E2393BA_215.png",
    "proxyclick_78AC9593_215.png",
    "netpresenter_B6310AB6_215.png",
    "tableauonline_472961DB_215.png",
    "airtable_54DF10B5_215.png",
    "parsable_C1F7AACC_215.png",
    "jellyfish_8714BC41_215.png",
    "timeclock365saml_90161DA5_215.png",
    "taniumcloudsso_CFFED0C3_215.png",
    "rootly_87A5AAD5_215.png",
    "agentbasedscim_6DA3B94D_215.png",
    "maptician_782CEFCB_215.png",
    "taskizeconnect_2374AD65_215.png",
    "markitprocurementservice_CF5A46B7_215.png",
    "lanschoolair_D2A43249_215.png",
    "zohoone_23051FC2_215.png",
    "chatwork_58A5FA10_215.png",
    "logmein_A4245938_215.png",
    "linkedinelevate_C7AE0FA6_215.png",
    "smartfilesaml_D054C8C5_215.png",
    "looop_332D3AF8_215.png",
    "kevinmitnicksecurityawarenesstraining_B7999052_215.png",
    "teamtoday_19D43246_215.png",
    "visitly_318CBD9F_215.png",
    "vbrickrevcloud_DA355C24_215.png",
    "mixpanel_A14CD9A2_215.png",
    "kintone_08775523_215.png",
    "thousandeyes_E27DD759_215.png",
    "surveymonkeyenterprise_30CC9D31_215.png",
    "blinq_7E229CA6_215.png",
    "olfeosaas_F7489939_215.png",
    "segment_C1DE766C_215.png",
    "successfactorsprovisioningtoad_C3811E5E_215.png",
    "servicenow_DFBD7F74_215.png",
    "storegate_ACD0B894_215.png",
    "sentry_E2E1DB33_215.png",
    "servicessosafe_43039842_215.png",
    "ardoq_16BD6251_215.png",
    "officespace_520245CC_215.png",
    "ciscospark_8A3A1E4F_215.png",
    "snowflake_3DA1BBD8_215.png",
    "splashtop_33CE5055_215.png",
    "playvox_F1F356B5_215.png",
    "shopifyplus_4D21C148_215.png",
    "ringcentral_67A4218F_215.png",
    "soloinsightcloudgatesso_C326758E_215.png",
    "brivo_F89E3C8B_215.png",
    "teamgo_776E6DB7_215.png",
    "forteschangecloud_1E8153B0_215.png",
    "petrovue_A409B4EE_215.png",
    "workgrid_8DC4C244_215.png",
    "h5mag_8320EEB6_215.png",
    "metanetworksconnector_F7D6A62E_215.png",
    "keepabl_74A9C627_215.png",
    "successfactorsprovisioningtoaad_C3811E5E_215.png",
    "starmind_888C4986_215.png",
    "contentstack_7DC50C66_215.png",
    "bluejeans_99095524_215.png",
    "humbol_D1EE0664_215.png",
    "freshserviceprovisioning_70C35412_215.png",
    "alintoprotect_54585EFC_215.png",
    "bentleySystems_1D0D273F_215.png",
    "appaegisisolationaccesscloud_36592574_215.png",
    "telenor_91669664_215.png",
    "clebex_B175F010_215.png",
    "bizagistudiofordigitalprocessautomation_C7808F38_215.png",
    "merchlogix_086F1998_215.png",
    "benqiam_74528C89_215.png",
    "torii_BF8C4A4D_215.png",
    "linkedinsalesnavigator_8640528F_215.png",
    "axiadcloud_32E767B3_215.png",
    "reallinks_0EE71237_215.png",
    "mindtickle_2B08378C_215.png",
    "lawvu_9B05768B_215.png",
    "kpifire_126B4207_215.png",
    "limblecmms_95041490_215.png",
    "logicgate_BB57D70B_215.png",
    "terratrue_805319FE_215.png",
    "cernercentral_BDDF4901_215.png",
    "bpanda_42836AC9_215.png",
    "swit_AAC76084_215.png",
    "bullseyetdp_E76D1989_215.png",
    "catonetworks_65821551_215.png",
    "spaceiq_6E62CA0D_215.png",
    "signagelive_02957E75_215.png",
    "box_A3A443E7_215.png",
    "boxcryptor_221CB88A_215.png",
    "bustleb2btransportsystems_F3DB2DD7_215.png",
    "blogin_01A2F1A3_215.png",
    "browserstack_5D7BCEEC_215.png",
  ]


const names = [
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/4me-provisioning-tutorial",
      name: "4me",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/8x8-provisioning-tutorial",
      name: "8x8",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/15five-provisioning-tutorial",
      name: "15Five",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/acunetix-360-provisioning-tutorial",
      name: "Acunetix 360",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/adobe-identity-management-provisioning-saml-tutorial",
      name: "Adobe Identity Management (SAML)",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/adobe-identity-management-provisioning-oidc-tutorial",
      name: "Adobe Identity Management (OIDC)",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/airbase-provisioning-tutorial",
      name: "Airbase",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/airstack-provisioning-tutorial",
      name: "Airstack",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/akamai-enterprise-application-access-provisioning-tutorial",
      name: "Akamai Enterprise Application Access",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/airtable-provisioning-tutorial",
      name: "Airtable",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/albert-provisioning-tutorial",
      name: "Albert",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/alertmedia-provisioning-tutorial",
      name: "AlertMedia",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/alexishr-provisioning-tutorial",
      name: "AlexisHR",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/alinto-protect-provisioning-tutorial",
      name: "Alinto Protect (renamed Cleanmail)",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/alohi-provisioning-tutorial",
      name: "Alohi",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/alvao-provisioning-tutorial",
      name: "ALVAO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/amazon-business-provisioning-tutorial",
      name: "Amazon Business",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/amazon-web-service-tutorial#configure-azure-ad-sso",
      name: "Amazon Web Services (AWS) - Role Provisioning",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/appaegis-isolation-access-cloud-provisioning-tutorial",
      name: "Appaegis Isolation Access Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/apple-school-manager-provision-tutorial",
      name: "Apple School Manager",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/apple-business-manager-provision-tutorial",
      name: "Apple Business Manager",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/ardoq-provisioning-tutorial",
      name: "Ardoq",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/asana-provisioning-tutorial",
      name: "Asana",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/askspoke-provisioning-tutorial",
      name: "askSpoke",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/astro-provisioning-tutorial",
      name: "Astro",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/atea-provisioning-tutorial",
      name: "Atea",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/atlassian-cloud-provisioning-tutorial",
      name: "Atlassian Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/atmos-provisioning-tutorial",
      name: "Atmos",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/auditboard-provisioning-tutorial",
      name: "AuditBoard",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/autodesk-sso-provisioning-tutorial",
      name: "Autodesk SSO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/azure-databricks-with-private-link-workspace-provisioning-tutorial",
      name: "Azure Databricks with Private Link Workspace",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/aws-single-sign-on-provisioning-tutorial",
      name: "AWS IAM Identity Center",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/axiad-cloud-provisioning-tutorial",
      name: "Axiad Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/benq-iam-provisioning-tutorial",
      name: "BenQ IAM",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bentley-automatic-user-provisioning-tutorial",
      name: "Bentley - Automatic User Provisioning",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/better-stack-provisioning-tutorial",
      name: "Better Stack",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bic-cloud-design-provisioning-tutorial",
      name: "BIC Cloud Design",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bis-provisioning-tutorial",
      name: "BIS",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bitabiz-provisioning-tutorial",
      name: "BitaBIZ",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bizagi-studio-for-digital-process-automation-provisioning-tutorial",
      name: "Bizagi Studio for Digital Process Automation",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bldng-app-provisioning-tutorial",
      name: "BLDNG APP",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/blink-provisioning-tutorial",
      name: "Blink",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/blinq-provisioning-tutorial",
      name: "Blinq",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/blogin-provisioning-tutorial",
      name: "BlogIn",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bluejeans-provisioning-tutorial",
      name: "BlueJeans",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bonusly-provisioning-tutorial",
      name: "Bonusly",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/box-userprovisioning-tutorial",
      name: "Box",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/boxcryptor-provisioning-tutorial",
      name: "Boxcryptor",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bpanda-provisioning-tutorial",
      name: "Bpanda",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/brivo-onair-identity-connector-provisioning-tutorial",
      name: "Brivo Onair Identity Connector",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/britive-provisioning-tutorial",
      name: "Britive",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/browserstack-single-sign-on-provisioning-tutorial",
      name: "BrowserStack Single Sign-on",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bullseyetdp-provisioning-tutorial",
      name: "BullseyeTDP",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/bustle-b2b-transport-systems-provisioning-tutorial",
      name: "Bustle B2B Transport Systems",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/canva-provisioning-tutorial",
      name: "Canva",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cato-networks-provisioning-tutorial",
      name: "Cato Networks Provisioning",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cernercentral-provisioning-tutorial",
      name: "Cerner Central",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cerby-provisioning-tutorial",
      name: "Cerby",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/chaos-provisioning-tutorial",
      name: "Chaos",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/chatwork-provisioning-tutorial",
      name: "Chatwork",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/checkproof-provisioning-tutorial",
      name: "CheckProof",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cinode-provisioning-tutorial",
      name: "Cinode",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cisco-user-management-for-secure-access-provisioning-tutorial",
      name: "Cisco User Management for Secure Access",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cisco-webex-provisioning-tutorial",
      name: "Cisco Webex",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/clarizen-one-provisioning-tutorial",
      name: "Clarizen One",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cleanmail-swiss-provisioning-tutorial",
      name: "Cleanmail Swiss",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/clearview-trade-provisioning-tutorial",
      name: "ClearView Trade",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/clebex-provisioning-tutorial",
      name: "Clebex",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cloud-academy-sso-provisioning-tutorial",
      name: "Cloud Academy - SSO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/coda-provisioning-tutorial",
      name: "Coda",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/code42-provisioning-tutorial",
      name: "Code42",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cofense-provision-tutorial",
      name: "Cofense Recipient Sync",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/colloquial-provisioning-tutorial",
      name: "Colloquial",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/connecter-provisioning-tutorial",
      name: "Connecter",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/contentful-provisioning-tutorial",
      name: "Contentful",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/contentstack-provisioning-tutorial",
      name: "Contentstack",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/comeet-recruiting-software-provisioning-tutorial",
      name: "Comeet Recruiting Software",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/concur-provisioning-tutorial",
      name: "Concur",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cornerstone-ondemand-provisioning-tutorial",
      name: "Cornerstone OnDemand",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/culturehq-provisioning-tutorial",
      name: "CultureHQ",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cybozu-provisioning-tutorial",
      name: "Cybozu",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/cybsafe-provisioning-tutorial",
      name: "CybSafe",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/dagster-cloud-provisioning-tutorial",
      name: "Dagster Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/datadog-provisioning-tutorial",
      name: "Datadog",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/documo-provisioning-tutorial",
      name: "Documo",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/docusign-provisioning-tutorial",
      name: "DocuSign",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/dropboxforbusiness-provisioning-tutorial",
      name: "Dropbox Business",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/dynamic-signal-provisioning-tutorial",
      name: "Dynamic Signal",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/dialpad-provisioning-tutorial",
      name: "Dialpad",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/directprint-io-provisioning-tutorial",
      name: "directprint.io",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/diffchecker-provisioning-tutorial",
      name: "Diffchecker",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/druva-provisioning-tutorial",
      name: "Druva",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/egnyte-provisioning-tutorial",
      name: "Egnyte",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/embed-signage-provisioning-tutorial",
      name: "embed signage",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/envoy-provisioning-tutorial",
      name: "Envoy",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/eletive-provisioning-tutorial",
      name: "Eletive",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/elia-provisioning-tutorial",
      name: "elia",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/elium-provisioning-tutorial",
      name: "Elium",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/exium-provisioning-tutorial",
      name: "Exium",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/evercate-provisioning-tutorial",
      name: "Evercate",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/facebook-work-accounts-provisioning-tutorial",
      name: "Facebook Work Accounts",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/federated-directory-provisioning-tutorial",
      name: "Federated Directory",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/figma-provisioning-tutorial",
      name: "Figma",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/flock-provisioning-tutorial",
      name: "Flock",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/foodee-provisioning-tutorial",
      name: "Foodee",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/forcepoint-cloud-security-gateway-provisioning-tutorial",
      name: "Forcepoint Cloud Security Gateway - User Authentication",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/fortes-change-cloud-provisioning-tutorial",
      name: "Fortes Change Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/frankli-io-provisioning-tutorial",
      name: "frankli.io",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/freshservice-provisioning-tutorial",
      name: "Freshservice Provisioning",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/fuze-provisioning-tutorial",
      name: "Fuze",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/funnel-leasing-provisioning-tutorial",
      name: "Funnel Leasing",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/g-suite-provisioning-tutorial",
      name: "Google Cloud / G Suite Connector by Microsoft",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/purecloud-by-genesys-provisioning-tutorial",
      name: "Genesys Cloud for Azure",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/getabstract-provisioning-tutorial",
      name: "getAbstract",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/ghae-provisioning-tutorial",
      name: "GHAE",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial",
      name: "GitHub",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-ae-provisioning-tutorial",
      name: "GitHub AE",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial",
      name: "GitHub Enterprise Managed User",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial",
      name: "GitHub Enterprise Managed User (OIDC)",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/citrixgotomeeting-provisioning-tutorial",
      name: "GoToMeeting",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/global-relay-identity-sync-provisioning-tutorial",
      name: "Global Relay Identity Sync",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/gong-provisioning-tutorial",
      name: "Gong",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/golinks-provisioning-tutorial",
      name: "GoLinks",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/goskills-provisioning-tutorial",
      name: "GoSkills",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/grammarly-provisioning-tutorial",
      name: "Grammarly",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/grouptalk-provisioning-tutorial",
      name: "GroupTalk",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/gtmhub-provisioning-tutorial",
      name: "Gtmhub",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/harness-provisioning-tutorial",
      name: "Harness",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/headspace-provisioning-tutorial",
      name: "Headspace",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/helloid-provisioning-tutorial",
      name: "HelloID",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/holmes-cloud-provisioning-tutorial",
      name: "ContractS CLM",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/hootsuite-provisioning-tutorial",
      name: "Hootsuite",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/hoxhunt-provisioning-tutorial",
      name: "Hoxhunt",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/howspace-provisioning-tutorial",
      name: "Howspace",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/humbol-provisioning-tutorial",
      name: "Humbol",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/hypervault-provisioning-tutorial",
      name: "Hypervault",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/h5mag-provisioning-tutorial",
      name: "H5mag",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/ideo-provisioning-tutorial",
      name: "Ideo",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/ideagen-cloud-provisioning-tutorial",
      name: "Ideagen Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/infor-cloudsuite-provisioning-tutorial",
      name: "Infor CloudSuite",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/informacast-provisioning-tutorial",
      name: "InformaCast",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/ipass-smartconnect-provisioning-tutorial",
      name: "iPass SmartConnect",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/iris-intranet-provisioning-tutorial",
      name: "Iris Intranet",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/insight4grc-provisioning-tutorial",
      name: "Insight4GRC",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/insightly-saml-provisioning-tutorial",
      name: "Insightly SAML",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/insite-lms-provisioning-tutorial",
      name: "Insite LMS",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/introdus-pre-and-onboarding-platform-provisioning-tutorial",
      name: "introDus Pre and Onboarding Platform",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/invision-provisioning-tutorial",
      name: "Invision",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/invitedesk-provisioning-tutorial",
      name: "InviteDesk",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/jellyfish-provisioning-tutorial",
      name: "Jellyfish",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/jive-provisioning-tutorial",
      name: "Jive",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/jostle-provisioning-tutorial",
      name: "Jostle",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/joyn-fsm-provisioning-tutorial",
      name: "Joyn FSM",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/juno-journey-provisioning-tutorial",
      name: "Juno Journey",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/keeper-password-manager-digitalvault-provisioning-tutorial",
      name: "Keeper Password Manager & Digital Vault",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/keepabl-provisioning-tutorial",
      name: "Keepabl",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/kintone-provisioning-tutorial",
      name: "Kintone",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/kisi-physical-security-provisioning-tutorial",
      name: "Kisi Physical Security",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/klaxoon-saml-provisioning-tutorial",
      name: "Klaxoon SAML",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/klaxoon-provisioning-tutorial",
      name: "Klaxoon",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/kno2fy-provisioning-tutorial",
      name: "kno2fy",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/knowbe4-security-awareness-training-provisioning-tutorial",
      name: "KnowBe4 Security Awareness Training",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/kpifire-provisioning-tutorial",
      name: "kpifire",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/kpn-grip-provisioning-tutorial",
      name: "KPN Grip",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/lanschool-air-provisioning-tutorial",
      name: "LanSchool Air",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/lawvu-provisioning-tutorial",
      name: "LawVu",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/limblecmms-provisioning-tutorial",
      name: "LimbleCMMS",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/linkedinelevate-provisioning-tutorial",
      name: "LinkedIn Elevate",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/linkedinsalesnavigator-provisioning-tutorial",
      name: "LinkedIn Sales Navigator",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/litmos-provisioning-tutorial",
      name: "Litmos",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/lucid-all-products-provisioning-tutorial",
      name: "Lucid (All Products)",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/lucidchart-provisioning-tutorial",
      name: "Lucidchart",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/lusid-provisioning-tutorial",
      name: "LUSID",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/leapsome-provisioning-tutorial",
      name: "Leapsome",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/logicgate-provisioning-tutorial",
      name: "LogicGate",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/looop-provisioning-tutorial",
      name: "Looop",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/logmein-provisioning-tutorial",
      name: "LogMeIn",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/m-files-provisioning-tutorial",
      name: "M-Files",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/maptician-provisioning-tutorial",
      name: "Maptician",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/markit-procurement-service-provisioning-tutorial",
      name: "Markit Procurement Service",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mediusflow-provisioning-tutorial",
      name: "MediusFlow",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/merchlogix-provisioning-tutorial",
      name: "Merchlogix",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/meta-networks-connector-provisioning-tutorial",
      name: "Meta Networks Connector",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mixpanel-provisioning-tutorial",
      name: "Mixpanel",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mindtickle-provisioning-tutorial",
      name: "Mindtickle",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/miro-provisioning-tutorial",
      name: "Miro",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mobileiron-provisioning-tutorial",
      name: "MobileIron",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mondaycom-provisioning-tutorial",
      name: "monday.com",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/moqups-provisioning-tutorial",
      name: "Moqups",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mural-identity-provisioning-tutorial",
      name: "MURAL Identity",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mx3-diagnostics-connector-provisioning-tutorial",
      name: "MX3 Diagnostics",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/myday-provision-tutorial",
      name: "myday",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/mypolicies-provisioning-tutorial",
      name: "myPolicies",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/n-able-user-provisioning-tutorial",
      name: "N-able User Provisioning",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/netpresenter-provisioning-tutorial",
      name: "Netpresenter Next",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/netskope-administrator-console-provisioning-tutorial",
      name: "Netskope User Authentication",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/netsparker-enterprise-provisioning-tutorial",
      name: "Netsparker Enterprise",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/new-relic-by-organization-provisioning-tutorial",
      name: "New Relic by Organization",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/nordpass-provisioning-tutorial",
      name: "NordPass",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/notion-provisioning-tutorial",
      name: "Notion",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/officespace-software-provisioning-tutorial",
      name: "OfficeSpace Software",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/olfeo-saas-provisioning-tutorial",
      name: "Olfeo SAAS",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/oneflow-provisioning-tutorial",
      name: "Oneflow",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/openforms-provisioning-tutorial",
      name: "OpenForms",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/open-text-directory-services-provisioning-tutorial",
      name: "OpenText Directory Services",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/oracle-cloud-infrastructure-console-provisioning-tutorial",
      name: "Oracle Cloud Infrastructure Console",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/oracle-fusion-erp-provisioning-tutorial",
      name: "Oracle Fusion ERP",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/oreilly-learning-platform-provisioning-tutorial",
      name: "O'Reilly learning platform",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/palo-alto-networks-cloud-identity-engine-provisioning-tutorial",
      name: "Palo Alto Networks Cloud Identity Engine - Cloud Authentication Service",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/palo-alto-networks-scim-connector-provisioning-tutorial",
      name: "Palo Alto Networks SCIM Connector",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/papercut-cloud-print-management-provisioning-tutorial",
      name: "PaperCut Cloud Print Management",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/parsable-provisioning-tutorial",
      name: "Parsable",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/peripass-provisioning-tutorial",
      name: "Peripass",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/personify-inc-provisioning-tutorial",
      name: "Personify Inc",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/pingboard-provisioning-tutorial",
      name: "Pingboard",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/plandisc-provisioning-tutorial",
      name: "Plandisc",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/playvox-provisioning-tutorial",
      name: "Playvox",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/postman-provisioning-tutorial",
      name: "Postman",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/preciate-provisioning-tutorial",
      name: "Preciate",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/printer-logic-saas-provisioning-tutorial",
      name: "PrinterLogic SaaS",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/priority-matrix-provisioning-tutorial",
      name: "Priority Matrix",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/prodpad-provisioning-tutorial",
      name: "ProdPad",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/promapp-provisioning-tutorial",
      name: "Promapp",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/proxyclick-provisioning-tutorial",
      name: "Proxyclick",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/peakon-provisioning-tutorial",
      name: "Peakon",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/proware-provisioning-tutorial",
      name: "Proware",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/puzzel-provisioning-tutorial",
      name: "Puzzel",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/real-links-provisioning-tutorial",
      name: "Real Links",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/recnice-provisioning-tutorial",
      name: "Recnice",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/reward-gateway-provisioning-tutorial",
      name: "Reward Gateway",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/rfpio-provisioning-tutorial",
      name: "RFPIO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/rhombus-systems-provisioning-tutorial",
      name: "Rhombus Systems",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/ringcentral-provisioning-tutorial",
      name: "RingCentral",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/robin-provisioning-tutorial",
      name: "Robin",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/rollbar-provisioning-tutorial",
      name: "Rollbar",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/rootly-provisioning-tutorial",
      name: "Rootly",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/rouse-sales-provisioning-tutorial",
      name: "Rouse Sales",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/safeguard-cyber-provisioning-tutorial",
      name: "SafeGuard Cyber",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/salesforce-provisioning-tutorial",
      name: "Salesforce",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/salesforce-sandbox-provisioning-tutorial",
      name: "Salesforce Sandbox",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/samanage-provisioning-tutorial",
      name: "Samanage",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sap-analytics-cloud-provisioning-tutorial",
      name: "SAP Analytics Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sap-cloud-platform-identity-authentication-provisioning-tutorial",
      name: "SAP Cloud Identity Services",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sap-successfactors-inbound-provisioning-tutorial",
      name: "SAP SuccessFactors to Active Directory",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sap-successfactors-inbound-provisioning-cloud-only-tutorial",
      name: "SAP SuccessFactors to Microsoft Entra ID",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sap-successfactors-writeback-tutorial",
      name: "SAP SuccessFactors Writeback",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sas-viya-sso-provisioning-tutorial",
      name: "SAS Viya SSO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/schoolstream-asa-provisioning-tutorial",
      name: "SchoolStream ASA",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/screensteps-provisioning-tutorial",
      name: "ScreenSteps",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/secure-login-provisioning-tutorial",
      name: "SecureLogin",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sentry-provisioning-tutorial",
      name: "Sentry",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/servicely-provisioning-tutorial",
      name: "Servicely",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/servicenow-provisioning-tutorial",
      name: "ServiceNow",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/segment-provisioning-tutorial",
      name: "Segment",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/shopify-plus-provisioning-tutorial",
      name: "Shopify Plus",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sigma-computing-provisioning-tutorial",
      name: "Sigma Computing",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/signagelive-provisioning-tutorial",
      name: "Signagelive",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sign-in-enterprise-host-provisioning-tutorial",
      name: "Sign In Enterprise Host Provisioning",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/simple-in-out-provisioning-tutorial",
      name: "Simple In/Out",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/slack-provisioning-tutorial",
      name: "Slack",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/smartfile-provisioning-tutorial",
      name: "Smartfile",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/smartsheet-provisioning-tutorial",
      name: "Smartsheet",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/smallstep-ssh-provisioning-tutorial",
      name: "Smallstep SSH",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/snowflake-provisioning-tutorial",
      name: "Snowflake",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/soloinsight-cloudgate-sso-provisioning-tutorial",
      name: "Soloinsight-CloudGate SSO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sosafe-provisioning-tutorial",
      name: "SoSafe",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/spaceiq-provisioning-tutorial",
      name: "SpaceIQ",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/splashtop-provisioning-tutorial",
      name: "Splashtop",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/starleaf-provisioning-tutorial",
      name: "StarLeaf",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/starmind-provisioning-tutorial",
      name: "Starmind",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/storegate-provisioning-tutorial",
      name: "Storegate",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/surveymonkey-enterprise-provisioning-tutorial",
      name: "SurveyMonkey Enterprise",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/swit-provisioning-tutorial",
      name: "Swit",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/symantec-web-security-service",
      name: "Symantec Web Security Service (WSS)",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/tableau-online-provisioning-tutorial",
      name: "Tableau Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/tailscale-provisioning-tutorial",
      name: "Tailscale",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/talentech-provisioning-tutorial",
      name: "Talentech",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/tanium-sso-provisioning-tutorial",
      name: "Tanium SSO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/tap-app-security-provisioning-tutorial",
      name: "Tap App Security",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/taskize-connect-provisioning-tutorial",
      name: "Taskize Connect",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/teamgo-provisioning-tutorial",
      name: "Teamgo",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/team-today-provisioning-tutorial",
      name: "Team Today",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/teamviewer-provisioning-tutorial",
      name: "TeamViewer",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/terratrue-provisioning-tutorial",
      name: "TerraTrue",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/thousandeyes-provisioning-tutorial",
      name: "ThousandEyes",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/tic-tac-mobile-provisioning-tutorial",
      name: "Tic-Tac Mobile",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/timeclock-365-provisioning-tutorial",
      name: "TimeClock 365",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/timeclock-365-saml-provisioning-tutorial",
      name: "Timeclock 365 SAML",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/templafy-saml-2-provisioning-tutorial",
      name: "Templafy SAML2",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/templafy-openid-connect-provisioning-tutorial",
      name: "Templafy OpenID Connect",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/theorgwiki-provisioning-tutorial",
      name: "TheOrgWiki",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/thrive-lxp-provisioning-tutorial",
      name: "Thrive LXP",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/torii-provisioning-tutorial",
      name: "Torii",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/travelperk-provisioning-tutorial",
      name: "TravelPerk",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/tribeloo-provisioning-tutorial",
      name: "Tribeloo",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/twingate-provisioning-tutorial",
      name: "Twingate",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/uber-provisioning-tutorial",
      name: "Uber",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/unifi-provisioning-tutorial",
      name: "UNIFI",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/uniflow-online-provisioning-tutorial",
      name: "uniFlow Online",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/uni-tel-as-provisioning-tutorial",
      name: "Uni-tel A/S",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/vault-platform-provisioning-tutorial",
      name: "Vault Platform",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/vbrick-rev-cloud-provisioning-tutorial",
      name: "Vbrick Rev Cloud",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/v-client-provisioning-tutorial",
      name: "V-Client",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/velpic-provisioning-tutorial",
      name: "Velpic",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/veritas-provisioning-tutorial",
      name: "Veritas Enterprise Vault.cloud SSO-SCIM",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/visibly-provisioning-tutorial",
      name: "Visibly",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/visitly-provisioning-tutorial",
      name: "Visitly",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/vmware-identity-service-provisioning-tutorial",
      name: "VMware Identity Service",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/vonage-provisioning-tutorial",
      name: "Vonage",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/webroot-security-awareness-training-provisioning-tutorial",
      name: "Webroot Security Awareness Training",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/wats-provisioning-tutorial",
      name: "WATS",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/wedo-provisioning-tutorial",
      name: "WEDO",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/whimsical-provisioning-tutorial",
      name: "Whimsical",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/wiggledesk-provisioning-tutorial",
      name: "WiggleDesk",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/workday-inbound-tutorial",
      name: "Workday to Active Directory",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/workday-inbound-cloud-only-tutorial",
      name: "Workday to Microsoft Entra ID",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/workday-writeback-tutorial",
      name: "Workday Writeback",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/workteam-provisioning-tutorial",
      name: "Workteam",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/workplace-from-meta-provisioning-tutorial",
      name: "Workplace from Meta",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/workgrid-provisioning-tutorial",
      name: "Workgrid",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/wrike-provisioning-tutorial",
      name: "Wrike",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/xledger-provisioning-tutorial",
      name: "Xledger",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/xm-fax-and-xm-send-secure-provisioning-tutorial",
      name: "XM Fax and XM SendSecure",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/yardione-provisioning-tutorial",
      name: "YardiOne",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/yellowbox-provisioning-tutorial",
      name: "Yellowbox",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zapier-provisioning-tutorial",
      name: "Zapier",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zendesk-provisioning-tutorial",
      name: "Zendesk",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zenya-provisioning-tutorial",
      name: "Zenya",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zero-provisioning-tutorial",
      name: "Zero",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zip-provisioning-tutorial",
      name: "Zip",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zoom-provisioning-tutorial",
      name: "Zoom",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zoho-one-provisioning-tutorial",
      name: "Zoho One",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-provisioning-tutorial",
      name: "Zscaler",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-beta-provisioning-tutorial",
      name: "Zscaler Beta",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-one-provisioning-tutorial",
      name: "Zscaler One",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-private-access-provisioning-tutorial",
      name: "Zscaler Private Access",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-two-provisioning-tutorial",
      name: "Zscaler Two",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-three-provisioning-tutorial",
      name: "Zscaler Three",
    },
    {
      url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/zscaler-zscloud-provisioning-tutorial",
      name: "Zscaler ZSCloud",
    },
  ]
const queries = []

for(let i = 0 ; i < names.length ; i++) {
    const sessionId = uuidv4()
    const iconUrl = './assets/favicon/Webex/'+imgs[i]
    const query = ` INSERT INTO integration_application (integration_app_id, integration_app_display_name, icon_url, integration_category, 
    filter_translator, AppOrder, redirect_url) VALUES (' ${sessionId}','${names[i].name}', '${iconUrl}', 'SCIMMicrosoft', null, 0, '${names[i].url}');`;
    queries.push(query);
}

console.log(queries)