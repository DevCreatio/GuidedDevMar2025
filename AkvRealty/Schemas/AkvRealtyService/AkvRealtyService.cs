namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
                                   
    public class RealtyService : BaseService, IReadOnlySessionState //IReadOnlySessionState specify that the code does not change session state value  (Only for windows) 
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public decimal GetMaxPriceByTypeId(string realtyTypeId, string realtyOfferTypeId)
        {
            /*Check per verificare se i campi realtypeId e realtyOfferTypeId sono sono vuoti o no*/
            if (string.IsNullOrEmpty(realtyTypeId) || string.IsNullOrEmpty(realtyOfferTypeId))
            {
                return -1;
            }
            Select select = new Select(UserConnection) /*UserConnection required for any operation on the database (represent current User section contects) SUPER CLASS BaseService*/
                .Column(Func.Max("AkvPrice"))
                .From("AkvRealty")
                .Where("AkvTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
                .And("AkvOffertypeId").IsEqual(Column.Parameter(new Guid(realtyOfferTypeId)))
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
    }
}