
var butter = Butter('e09f70cdfae750fafe1b7232a0812e645b29acaa');

butter.post.list({ page: 1, page_size: 10 }).then(function (response) {
    console.log(response)
})

var d = new Date();
$('#year').text(d.getUTCFullYear());

$('#ProductModal').on('shown.bs.modal', function () {
    $('#ProductModal').trigger('focus');
});

$(document).ready(function () {
    var source = $('#first-template').html();
    var template = Handlebars.compile(source);
    var context, el_html;

    $('#n540_button').click(function () {
        context = {
            title: "Sunrich N-540 PCIe NBASE-T Card",
            image: "/img/N-540.png",
            features: [
                { feature: "10Gbps Networking delivers up to 10X-faster data-transfer speeds for bandwidth-demanding tasks over existing cabling" },
                { feature: "Full Compatibility network speeds of 10/5/2.5/1Gbps and 100Mbps, for seamless backward compatibility" },
                { feature: "Windows and Linux supported" },
                { feature: "The RJ45 port is a standard used in most offices and homes, to utilize the low cost of standard copper network cabling" },
                { feature: "Lower CPU utilization and increased network performance  through AQtion™ technology" }
            ],
            description: `
      The N-540 PCIe 10G NBASE-T Single Port Networking Adapter provides single-port connectivity that allows a server, workstation, or gaming 
      desktop computer to join a network in your home, business or datacenter with ease. 
      
      The network card incorporates AQtion™ patented technologies to offer a low cost, high-performance, and low power solution. The 10G NBASE-T 
      Network Adapter Card connects directly into your PCIe x16, x8, or x4 slot on your motherboard and is compatible with Windows, and Linux 
      operating systems. With the QoS support, you can prioritize data to ensure the highest quality service from your most data hungry applications.       
      `,
            pb_link: "/pb/N-540.pdf",
        }
        el_html = template(context);
        $("#render_here").html(el_html);
    });

    $('#USB_NBASE-T_button, #USB_NBASE-T_link').click(function () {
        context = {
            title: "Surnich USB to NBASE-T Adapter",
            image: "/img/USBtoNBASE-T.png",
            features: [
                { feature: "NBASE-T Networking delivers up to 5X-faster data-transfer speeds for bandwidth-demanding tasks over existing cabling" },
                { feature: "Full Compatibility network speeds of 5G/2.5G/1G/100M, for seamless backward compatibility" },
                { feature: "Windows and Linux supported" },
                { feature: "Lower CPU utilization and increased network performance through AQtion™ technology" },
                { feature: "Supports Quality of Service (QoS) to help increase performance for the more data intensive tasks" }
            ],
            description: `
      The USB 3.1 Gen 1 to NBASE-T Networking Adapter provides single-port connectivity that allows a server, workstation, tablet, or laptop 
      computer to join a network in your business or datacenter with ease. 
      The network adapter incorporates the AQtion™ patented technology to offer a low-cost, high-performance, and low power solution. The USB 
      3.1 Gen 1 to NBASE-T Network Adapter connects directly into your USB Type-C port on your computer and is compatible with Windows, macOS, and 
      Linux operating systems. With the QoS support, you can prioritize data to ensure the highest quality service from your most data hungry 
      applications. 
      `,
            pb_link: "/pb/USBtoNBASE-T.pdf",
        }
        el_html = template(context);
        $("#render_here").html(el_html);
    });

});
