import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * Bootstrap function to initialize the NestJS application
 * Sets up Swagger documentation and validation pipes
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend integration
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') || [
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    credentials: true,
  });

  // Global validation pipe for request validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger API Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('Clarity API')
    .setDescription(
      'AI-powered task management application with Supabase authentication',
    )
    .setVersion('1.0.0')
    .addTag('auth', 'Authentication endpoints')
    .addTag('tasks', 'Task management endpoints')
    .addTag('memory', 'Memory notes and AI features')
    .addTag('insights', 'User analytics and insights')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter Supabase JWT token',
        in: 'header',
      },
      'JWT-auth', // This name will be used in @ApiBearerAuth('JWT-auth')
    )
    .addServer('http://localhost:3000', 'Local development server')
    .addServer('https://api.clarity.example.com', 'Production server')
    .setContact(
      'Clarity Team',
      'https://clarity.example.com',
      'support@clarity.example.com',
    )
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'Clarity API Documentation',
    customfavIcon: '/favicon.ico',
    customCss: `
      .swagger-ui .topbar { display: none; }
      .swagger-ui .info .title { color: #1f2937; }
    `,
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'tag',
      operationsSorter: 'alpha',
      tagsSorter: 'alpha',
    },
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation: http://localhost:${port}/api/docs`);
}

void bootstrap();
